"use client"
import React from 'react'

export default function Sidebar () {
    return (
      <aside className="w-64 bg-white text-black h-screen p-4 fixed top-[64px] left-0 flex flex-col">
        <nav className='flex-1'>
          <ul className="space-y-4 border-r border-gray-300 h-full">
            <li>
              <a href="" className="hover:text-blue-300">Dashboard</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-300">Dashboard</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-300">Dashboard</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
}
