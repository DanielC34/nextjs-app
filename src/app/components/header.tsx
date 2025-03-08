"use client"
import React from "react";
import Image from "next/image";
import WhatbytesImg from "@/assets/whatbyte.jpg"; // Adjust the path if necessary

export default function Header() {
  return (
    <header
      role="banner"
      className="block w-full max-w-full px-4 py-4 mx-auto bg-white sticky top-0 border-b border-gray-200 lg:px-8 z-[9999]"
    >
      <div className="flex items-center justify-between">
        <div className="box-content">
          <Image
            src={WhatbytesImg}
            alt="WhatBytes"
            className="h-9 w-55"
          />
        </div>
      </div>
    </header>
  );
}
