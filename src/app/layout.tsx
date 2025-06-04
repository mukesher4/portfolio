import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "Home | Mukesh R",
  description: "Portfolio of Mukesh R",
};

<link rel="icon" href="/feathersMcgraw.png" sizes="any" />

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen`}
      >
        <div className="flex flex-col max-w-3xl mx-auto px-4 py-12 gap-8">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
