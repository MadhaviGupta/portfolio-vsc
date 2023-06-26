"use client";
import { useState } from "react";
import Explorer from "./components/explorer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import "./globals.css";
import { Manrope } from "next/font/google";
import Page from "./page";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Madhavi Gupta",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  const [content, setContent] = useState("home");
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar/>
        <Sidebar />
        <Explorer content={content} setContent={setContent}/>
        <Page content={content} setContent={setContent}/>
        </body>
    </html>
  );
}
