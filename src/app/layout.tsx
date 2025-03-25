"use client";

import "./styles.css";
import { useRef, useState } from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className="flex flex-col  ">
          <main className=" p-3 flex h-screen w-full">
            <div className="flex-1 ">{children}</div>
          </main>
      </body>
    </html>
  );
}
