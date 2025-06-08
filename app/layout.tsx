import React from "react";
import "./globals.css";
import Layout from "@/components/Layout"; 
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "ULO",
  description: "Vi hjälper Sveriges bästa företag med allt de behöver",
  icons: {
    icon: "/favicon.png", 
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="sv" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/public/favicon.png" />
      </head>
      <body className="bg-background-white text-text-base antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
