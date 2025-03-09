"use client";
import React, { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    alert("Logging out...");
  };

  return (
    <div className="relative flex items-center bg-white rounded-md border border-gray-900 p-2">
      {/* Profile Avatar */}
      <Listbox value={null} onChange={handleLogout}>
        <ListboxButton
          className={clsx(
            "relative flex items-center justify-center w-6 h-6 rounded-full border border-gray-900 bg-gray-200 hover:bg-gray-300 transition"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <UserIcon className="w-5 h-5 text-gray-800" />
        </ListboxButton>

        {isOpen && (
          <ListboxOptions
            anchor="bottom"
            transition
            className="absolute right-0 top-full mt-2 w-36 rounded-lg border border-gray-300 bg-white shadow-lg z-50 focus:outline-none"
          >
            <ListboxOption
              value="logout"
              onClick={handleLogout}
              className="cursor-pointer px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Logout
            </ListboxOption>
          </ListboxOptions>
        )}
      </Listbox>
      {/* User Name */}
      <span className="ml-2 text-gray-800">John Doe</span>
    </div>
  );
};

export default User;
