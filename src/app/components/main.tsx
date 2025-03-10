"use client";
import React, { useState, useEffect } from "react";
import HTMLIcon from "@/assets/html-5.png";
import { Button } from "@headlessui/react";
import {
  TrophyIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Modal from "./ui/modal";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LineChart from "./line";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState("10");
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("30");

  // Load saved values from local storage
  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    const savedRank = localStorage.getItem("rank");
    const savedPercentile = localStorage.getItem("percentile");

    if (savedScore) setScore(savedScore);
    if (savedRank) setRank(savedRank);
    if (savedPercentile) setPercentile(savedPercentile);
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSave = (
    newScore: string,
    newRank: string,
    newPercentile: string
  ) => {
    setScore(newScore);
    setRank(newRank);
    setPercentile(newPercentile);

    // Save to local storage
    localStorage.setItem("score", newScore);
    localStorage.setItem("rank", newRank);
    localStorage.setItem("percentile", newPercentile);

    closeModal();
  };

  // Calculate percentage for the circular progress bar
  const scorePercentage = (Number(score) / 15) * 100;

  return (
    <div className="p-6 ml-64 bg-white font-sans">
      <h1 className="text-2xl font-bold mb-4">Skill test</h1>

      {/* Responsive Grid: 1 column on small, 3 columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column (md: span 2) */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Skill Test Summary */}
          <div className="flex justify-between bg-white w-full border border-gray-300 rounded-lg p-4">
            <div className="flex items-center mb-2 bg-white">
              <Image
                src={HTMLIcon}
                alt="HTML Icon"
                className="h-10 w-10 mr-2"
              />
              <div>
                <h2 className="text-lg font-bold">
                  Hyper Text Markup Language
                </h2>
                <p className="text-sm text-gray-600 bg-white">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            <Button
              onClick={openModal}
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
                  <TrophyIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-2">
                  <h3 className="text-md font-bold text-left">{rank}</h3>
                  <p className="text-gray-600 text-sm">Your Rank</p>
                </div>
              </div>
              {/* Percentile */}
              <div className="bg-white p-4 border-r border-gray-900 flex items-center justify-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                  <ChartBarIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-2">
                  <h3 className="text-md font-bold">{percentile}%</h3>
                  <p className="text-gray-600 text-sm">Percentile</p>
                </div>
              </div>
              {/* Correct Answers */}
              <div className="bg-white p-4 flex items-center justify-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-2">
                  <h3 className="text-md font-bold">{score}/15</h3>
                  <p className="text-gray-600 text-sm">Correct Answers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Graph */}
          <div className="bg-white border border-gray-400 p-4 rounded-lg h-110 flex flex-col">
            <h3 className="text-black font-bold">Comparison Graph</h3>
            <p className="text-gray-500">
              You have scored {percentile}% which is lower than the average 72%
              of all the engineers who took this assessment
            </p>
            <div className="mt-4">
              <LineChart percentile={Number(percentile)} />
            </div>
          </div>
        </div>

        {/* Right Column (md: span 1) */}
        <div className="md:col-span-1 flex flex-col gap-4">
          {/* Syllabus Wise Analysis */}
          <div className="bg-white border border-gray-400 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Syllabus Wise Analysis</h3>
            <div className="mt-4">
              <p className="text-sm">HTML Tools, Forms, History</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2 relative">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                />
                <span className="absolute right-0 top-0 transform translate-x-2 -translate-y-1/2 text-sm text-blue-500">
                  80%
                </span>
              </div>
              <p className="text-sm">Tags & References in HTML</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: "60%" }}
                />
              </div>
              <p className="text-sm">Tables & References in HTML</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-red-500 h-2.5 rounded-full"
                  style={{ width: "24%" }}
                />
              </div>
              <p className="text-sm">Tables & CSS Basics</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "96%" }}
                />
              </div>
            </div>
          </div>

          {/* Question Analysis */}
          <div className="bg-white border border-gray-400 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Question Analysis</h3>
            <p className="text-gray-600">
              You scored {score} questions correct out of 15. However, it still
              needs some improvements.
            </p>
            <div className="flex justify-center mt-4">
              <div className="w-24 h-24 relative">
                <CircularProgressbar
                  value={scorePercentage}
                  styles={buildStyles({
                    textSize: "16px",
                    pathColor: "#4A90E2",
                    textColor: "#4A90E2",
                    trailColor: "#d6d6d6",
                  })}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-md font-bold text-blue-500">
                    {score}/15
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        initialScore={score}
        initialRank={rank}
        initialPercentile={percentile}
        onSave={handleSave}
      />
    </div>
  );
}
