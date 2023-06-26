"use client"
import Sidebar from "./components/sidebar";
import Explorer from "./components/explorer";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { useState } from "react";
export default function Page({content, setContent}) {

  return (
    <main className="">
      <div className="flex">
        <Hero content={content} setContent={setContent} />
      </div>
    </main>
  );
}
