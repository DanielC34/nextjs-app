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
          <li className="flex items-center hover:bg-blue-100 p-2 rounded-md">
            <ChartBarIcon className="h-5 w-5 text-gray-500 mr-2" />
            <a href="" className="hover:text-blue-300">
              Dashboard
            </a>
          </li>
          <li className="flex items-center hover:bg-blue-100 p-2 rounded-md">
            <StarIcon className="h-5 w-5 text-gray-500 mr-2" />
            <a href="" className="hover:text-blue-300">
              Skill Level
            </a>
          </li>
          <li className="flex items-center hover:bg-blue-100 p-2 rounded-md">
            <BriefcaseIcon className="h-5 w-5 text-gray-500 mr-2" />
            <a href="" className="hover:text-purple-300">
              Internship
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
