"use client";
import React from "react";

export default function Main() {
  return (
    <div className="p-4 ml-63">
      <h1 className="text-2xl font-bold mb-8">Main Content Header</h1>
      <div className="grid grid-cols-2 gap-5">
        {/* Row 1 */}
        <div className="border border-gray-400 w-135 h-25 rounded-md mb-1">
          <div className="mt-3 ml-4">Mini Header comes here</div>
        </div>
        <div className="border border-gray-400 w-125 h-25 rounded-md mb-1">
          <div className="mt-3 ml-4">Mini Header comes here</div>
        </div>

        {/* Row 2 */}
        <div className="border border-gray-400 w-135 h-25 rounded-md mb-1">
          <div className="mt-3 ml-4">Mini Header comes here</div>
        </div>
        <div className="border border-gray-400 w-125 h-25 rounded-md mb-1">
          <div className="mt-3 ml-4">Mini Header comes here</div>
        </div>

        {/* Row 3 */}
        <div className="border border-gray-400 w-135 h-80 rounded-md">
          <div className="mt-3 ml-4">Mini header comes here</div>
        </div>
        <div className="border border-gray-400 w-125 h-80 rounded-md">
          <div className="mt-3 ml-4">Mini header comes here</div>
        </div>
      </div>
    </div>
  );
}
