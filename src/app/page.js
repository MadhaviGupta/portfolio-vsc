"use client";
import Sidebar from "./components/sidebar";
import Explorer from "./components/explorer";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { useState } from "react";
export default function Page() {
  const [content, setContent] = useState("home");

  return (
    <main className="">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Explorer content={content} setContent={setContent} />
        <Hero content={content} setContent={setContent} />
      </div>
    </main>
  );
}
