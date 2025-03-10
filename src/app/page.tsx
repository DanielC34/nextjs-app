"use client";
import React from "react";
import "./globals.css";
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";
import Main from "@/app/components/main";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <Main />
        </div>
      </div>
    </div>
  );
}
