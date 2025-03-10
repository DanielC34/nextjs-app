"use client";
import React, { useState } from "react";
import HTMLIcon from "@/assets/html-5.png";
import { Button } from "@headlessui/react";
import {
  TrophyIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Modal from "./ui/modal"; // Import the Modal component
import Image from "next/image";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-6 ml-64 bg-white font-sans">
      <h1 className="text-2xl font-bold mb-4">Skill test</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="col-span-2 flex flex-col gap-4">
          {/* Skill Test Summary */}
          <div className="flex justify-between bg-white w-full border border-gray-300 rounded-lg p-4">
            <div className="flex items-center mb-2 bg-blue-200">
              <Image src={HTMLIcon} alt="HTML Icon" className="h-10 w-10 mr-2" />
              <div>
                <h2 className="text-lg font-bold">
                  Hyper Text Markup Language
                </h2>
                <p className="text-sm text-gray-600 bg-yellow-200">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            <Button
              onClick={openModal} // Call the openModal function
              className="bg-blue-800 text-white px-4 py-2 rounded-md h-10"
            >
              Update
            </Button>
          </div>

          {/* Quick Statistics */}
          <div className="bg-white border border-gray-400 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Quick Statistics</h3>
            <div className="grid grid-cols-3 gap-4 my-4">
              {/* Your Rank */}
              <div className="bg-white p-4 border-r border-gray-900 flex items-center justify-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                  <TrophyIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-2">
                  <h3 className="text-md font-bold text-left">1</h3>
                  <p className="text-gray-600 text-sm">Your Rank</p>
                </div>
              </div>
              {/* Percentile */}
              <div className="bg-white p-4 border-r border-gray-900 flex items-center justify-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                  <ChartBarIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-2">
                  <h3 className="text-md font-bold">30%</h3>
                  <p className="text-gray-600 text-sm">Percentile</p>
                </div>
              </div>
              {/* Correct Answers */}
              <div className="bg-yellow-300 p-4 flex items-center justify-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                  <CheckCircleIcon
                    className="h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-2">
                  <h3 className="text-md font-bold">10 / 15</h3>
                  <p className="text-gray-600 text-sm">Correct Answers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Graph Placeholder */}
          <div className="bg-white border border-gray-400 p-4 rounded-lg h-40 flex">
            <h3 className="text-gray-500">Comparison Graph</h3>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 ml-4">
          {/* Syllabus Wise Analysis */}
          <div className="bg-white border border-gray-400 p-4 rounded-lg">
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
          <div className="bg-white border border-gray-400 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Question Analysis</h3>
            <p className="text-gray-600">
              You scored 10 questions correct out of 15. However, it still needs
              some improvements.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
