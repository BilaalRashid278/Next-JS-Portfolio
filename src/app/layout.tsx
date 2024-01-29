import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="h-[55px] flex justify-between items-center px-10">
            <Navbar />
          </nav>
            <Suspense fallback={<Loading/>}>
              {children}
            </Suspense>
        </header>
      </body>
    </html>
  );
}
