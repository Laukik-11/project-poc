"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/header";
import AppProvider from "@/state/app/context";

// Font files can be colocated inside of `pages`
// const drukWideBold = localFont({
//   src: "./fonts/FontsFree-Net-Druk-Wide-Bold.ttf",
// });
const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Nitro Faucet</title>
        <link rel="icon" href="logo.svg" />
      </head>
      <body className={`${inter.className}`}>
        <div className="root-div">
          <AppProvider>
            <Header />
            {children}
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
