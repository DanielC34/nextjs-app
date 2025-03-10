"use client";
import React from "react";
import {
  StarIcon,
  ChartBarIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white text-black h-screen p-4 fixed top-[64px] left-0 flex flex-col">
      <nav className="flex-1 mt-1">
        <ul className="space-y-4 border-r border-gray-300 h-full">
          {/* Dashboard */}
          <li className="group flex items-center p-2 rounded-md hover:bg-blue-100 transition-colors duration-200">
            <ChartBarIcon className="h-5 w-5 text-black mr-2 group-hover:text-blue-600" />
            <a href="#" className="text-black group-hover:text-blue-600">
              Dashboard
            </a>
          </li>

          {/* Skill Level */}
          <li className="group flex items-center p-2 rounded-md hover:bg-blue-100 transition-colors duration-200">
            <StarIcon className="h-5 w-5 text-black mr-2 group-hover:text-blue-600" />
            <a href="#" className="text-black group-hover:text-blue-600">
              Skill Level
            </a>
          </li>

          {/* Internship */}
          <li className="group flex items-center p-2 rounded-md hover:bg-blue-100 transition-colors duration-200">
            <BriefcaseIcon className="h-5 w-5 text-black mr-2 group-hover:text-blue-600" />
            <a href="#" className="text-black group-hover:text-blue-600">
              Internship
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
