"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const spreadsheet_ID = process.env.NEXT_PUBLIC_BOT_TEST_SPREADSHEET_ID;
  const api_key = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
  const [apiData, setApiData] = useState<string[]>();
  const [counter, setCounter] = useState(2);

  const spreadsheet_URL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheet_ID}`;

  async function GetSheetData() {
    const sheetURL = `${spreadsheet_URL}/values/Sheet1!A${counter}:E${counter+2}?key=${api_key}`;
    setCounter(counter + 3);
    try {

      const response = await fetch(sheetURL);

      const data = await response.json();
      console.log("Response = ", data.values);
      if (data.values.length < 3  ) {
        console.log("End of data");
      }
      setApiData(data.values);
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="w-1/2 h-1/2 bg-gray-400" onClick={GetSheetData}>
        Click here to get sheet data!
      </div>
      {apiData && (
        <div className="w-full h-fit border-2 border-white">
          {apiData?.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex flex-row items-center justify-center p-8 gap-20 border-2 border-white">
                <span>
                  {item[3]}
                </span>
                {item[4] &&
                  <Image src={`${item[4]}`} alt={item[3]} width={0} height={0} sizes="60vw" style={{ width: 'auto', height: '50%' }} />
                }
              </div>
            </div>
          ))}
        </div>
      )}

    </>
  )
}