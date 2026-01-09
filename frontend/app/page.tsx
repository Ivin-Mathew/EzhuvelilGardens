"use client"

import { useState } from "react";

export default function Home() {
  const spreadsheet_ID = process.env.NEXT_PUBLIC_BOT_TEST_SPREADSHEET_ID;
  const api_key = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
  const named_range = "Bot_table1";
  const [apiData, setApiData] = useState<string[][] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const spreadsheet_URL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheet_ID}`;

  async function GetBotResponses() {
    setError(null);
    if (!spreadsheet_ID || !api_key) {
      setError("Missing env vars NEXT_PUBLIC_BOT_TEST_SPREADSHEET_ID or NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY");
      return;
    }

    setLoading(true);
    try {
      // fetch spreadsheet metadata (namedRanges + sheet titles)
      const metaUrl = `${spreadsheet_URL}?fields=namedRanges,sheets.properties&key=${api_key}`;
      const mres = await fetch(metaUrl);
      const meta = await mres.json();
      if (!mres.ok) {
        setError("Failed to read spreadsheet metadata (check visibility / API key)");
        setLoading(false);
        return;
      }

      // determine range to use
      let rangeToUse: string | null = null;

      if (meta.namedRanges && meta.namedRanges.length) {
        const found = meta.namedRanges.find((nr: any) => nr.name === named_range);
        if (found) rangeToUse = named_range;
      }

      if (!rangeToUse && meta.sheets && meta.sheets.length) {
        const sheetMatch = meta.sheets.find((s: any) => s.properties?.title === named_range);
        if (sheetMatch) {
          rangeToUse = named_range;
        } else {
          const firstTitle = meta.sheets[0].properties?.title;
          if (firstTitle) {
            rangeToUse = firstTitle;
          }
        }
      }

      if (!rangeToUse) {
        setError("No range determined. Create a named range or ensure the sheet has data.");
        setLoading(false);
        return;
      }

      const valuesUrl = `${spreadsheet_URL}/values/${encodeURIComponent(rangeToUse)}?key=${api_key}`;
      const res = await fetch(valuesUrl);
      const json = await res.json();
      if (!res.ok) {
        setError(json?.error?.message || res.statusText || "Sheets API error");
        setLoading(false);
        return;
      }

      const values: string[][] = json.values || [];
      setApiData(values);
    } catch (err: any) {
      console.error(err);
      setError("Fetch failed — see console");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4">
      <button
        onClick={GetBotResponses}
        className="px-4 py-2 bg-blue-600 text-white rounded"
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch Bot_table1"}
      </button>

      {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}

      {apiData && apiData.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <div>Rows: {apiData.length}</div>
          <table style={{ borderCollapse: "collapse", marginTop: 8 }}>
            <thead>
              <tr>
                {(apiData[0] || []).map((h, i) => (
                  <th key={i} style={{ border: "1px solid #ccc", padding: 6 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {apiData.slice(1).map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ border: "1px solid #ddd", padding: 6 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {apiData && apiData.length === 0 && <div style={{ marginTop: 8 }}>No data returned from range.</div>}
    </div>
  );
}