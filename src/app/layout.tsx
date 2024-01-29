'use client'
import React from 'react';
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import { store } from './lib/store';
import { Provider } from 'react-redux';




export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <header>
            <nav className="h-[55px] flex justify-between items-center px-10">
              <Navbar />
            </nav>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </header>
        </Provider>
      </body>
    </html>
  );
}
