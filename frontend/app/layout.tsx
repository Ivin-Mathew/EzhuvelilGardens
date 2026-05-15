import Header from "@/sections/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezhuvelil Gardens",
  description: "Discover the beauty of nature at Ezhuveli Gardens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
