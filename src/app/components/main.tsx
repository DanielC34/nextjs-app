"use client";
import React, { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Modal from "./modal"; // Import the Modal component

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-6 ml-64 bg-red-200 font-sans">
      <h1 className="text-2xl font-bold mb-4">Skill test</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {/* Skill Test Summary */}
          <div className="flex justify-between bg-orange-200 w-full border border-gray-300 rounded-lg p-4">
            <div className="mb-3 bg-blue-200">
              <h2 className="text-lg font-bold">Hyper Text Markup Language</h2>
              <p className="text-sm text-gray-600 bg-yellow-200">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>
            <Button
              onClick={openModal} // Call the openModal function
              className="bg-blue-800 text-white px-4 py-2 rounded-md h-10"
            >
              Update
            </Button>
          </div>

          {/* Quick Statistics */}
          <div className="bg-green-200 border border-gray-900 p-4 rounded-lg text-center">
            <h3 className="">Quick Statistics</h3>
            <div className="bg-red-200 flex-row justify-center grid grid-cols-3 gap-4">
              <div className="bg-yellow-300 p-4 text-center border-r border-gray-900">
                <h3 className="text-xl font-bold">1</h3>
                <p className="text-gray-600">Your Rank</p>
              </div>
              <div className="bg-yellow-300 p-4 text-center border-r border-gray-900">
                <h3 className="text-xl font-bold">30%</h3>
                <p className="text-gray-600">Percentile</p>
              </div>
              <div className="bg-yellow-300 ml-4 p-4 rounded-lg text-center">
                <h3 className="text-xl font-bold">30%</h3>
                <p className="text-gray-600">Percentile</p>
              </div>
            </div>
          </div>

          {/* Comparison Graph Placeholder */}
          <div className="bg-white shadow-md p-4 rounded-lg h-40 flex items-center justify-center">
            <h3 className="text-gray-500">Comparison Graph</h3>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {/* Syllabus Wise Analysis */}
          <div className="bg-white border border-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Syllabus Wise Analysis</h3>
            <div className="mt-4">
              <p className="text-sm">HTML Tools, Forms, History</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <p className="text-sm">Tags & References in HTML</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <p className="text-sm">Tables & References in HTML</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-red-500 h-2.5 rounded-full"
                  style={{ width: "24%" }}
                ></div>
              </div>
              <p className="text-sm">Tables & CSS Basics</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "96%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Question Analysis */}
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Question Analysis</h3>
            <p className="text-gray-600">
              You scored 10 questions correct out of 15. However, it still needs
              some improvements.
            </p>
          </div>
        </div>
      </div>

      {/*Modal */}
      <Dialog open={isOpen} as="div" className="relative z-10" onClose={closeModal}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
              <DialogTitle as="h3" className="text-lg font-medium text-gray-900">
                Update Information
              </DialogTitle>
              <p className="mt-2 text-sm text-gray-600">
                Update the information for the skill test.
              </p>
              <div className="mt-4">
                <Button
                  className="bg-blue-800 text-white px-4 py-2 rounded-md"
                  onClick={closeModal}
                >
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
