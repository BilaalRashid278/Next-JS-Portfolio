'use client'
import React from 'react';
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import { store } from './lib/store';
import { Provider } from 'react-redux';






export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <head>
        <title>Portfolio</title>
        <link rel="icon" type="image/png" href="public/favicon.png" />
      </head>
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
