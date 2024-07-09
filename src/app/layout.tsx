import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Flex, Roboto_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";


const myFont=localFont({src:'../assets/sf-pro.woff2'})

export const metadata: Metadata = {
  
  title: "Maharastra Janavikas Kendra",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        
        
        
        {children}</body>
    </html>
  );
}
