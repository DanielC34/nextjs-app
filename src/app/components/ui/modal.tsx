"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Button } from "@headlessui/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Import the ArrowRightIcon
import HTMLIcon from "@/assets/html-5.png"; // Adjust the path to your HTML5 logo image
import Image from "next/image";
import "react-circular-progressbar/dist/styles.css"; // Import styles

interface ModalProps {
  isOpen: boolean; // Prop to control the visibility of the modal
  closeModal: () => void; // Prop to handle closing the modal
  initialScore: string; // Starting score value passed from parent component
  initialRank: string; // Starting rank value passed from parent component
  initialPercentile: string; // Starting percentile value passed from parent component
  onSave: (newScore: string, newRank: string, newPercentile: string) => void; // Callback function to send the updated values back to the parent
}

export default function Modal({
  isOpen,
  closeModal,
  initialScore,
  initialRank,
  initialPercentile,
  onSave,
}: ModalProps) {
  const [rank, setRank] = useState(initialRank); // State to manage the rank input value
  const [percentile, setPercentile] = useState(initialPercentile); // State to manage the percentile input value
  const [score, setScore] = useState(initialScore); // State to manage the score input value, initialized with initialScore
  const [rankError, setRankError] = useState<string | null>(null); // State to manage the rank input error
  const [percentileError, setPercentileError] = useState<string | null>(null); // State to manage the percentile input error
  const [scoreError, setScoreError] = useState<string | null>(null); // State to manage the score input error

  useEffect(() => {
    setScore(initialScore); // Update score when initialScore changes
    setRank(initialRank); // Update rank when initialRank changes
    setPercentile(initialPercentile); // Update percentile when initialPercentile changes
  }, [initialScore, initialRank, initialPercentile]);

  // Function to handle changes in the rank input
  const handleRankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRank(value);
    if (!value || isNaN(Number(value))) {
      setRankError("Required and must be a number"); // Set error if the input is not a number
    } else {
      setRankError(null); // Clear error if the input is valid
    }
  };

  // Function to handle changes in the percentile input
  const handlePercentileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPercentile(value);
    if (!value || isNaN(Number(value))) {
      setPercentileError("Required and must be a number"); // Set error if the input is not a number
    } else if (Number(value) < 0 || Number(value) > 100) {
      setPercentileError("Value must be between 0 and 100"); // Set error if the value is not between 0 and 100
    } else {
      setPercentileError(null); // Clear error if the input is valid
    }
  };

  // Function to handle changes in the score input
  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setScore(value);
    if (!value || isNaN(Number(value)) || Number(value) > 15) {
      setScoreError("Required and must be a number less than or equal to 15"); // Set error if the input is not a number or greater than 15
    } else {
      setScoreError(null); // Clear error if the input is valid
    }
  };

  return (
    <Dialog
      open={isOpen} // Control the visibility of the modal
      as="div"
      className="relative z-10 font-sans" // Apply font-sans to all text within the modal
      onClose={closeModal} // Handle closing the modal
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-900 bg-opacity-50">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <DialogTitle
                as="h3"
                className="text-xl font-bold uppercase text-gray-900"
              >
                Update Scores
              </DialogTitle>
              <Image src={HTMLIcon} alt="HTML5 Logo" className="h-8 w-8" />
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  1. Update your Rank
                </label>
                <input
                  type="text"
                  value={rank}
                  onChange={handleRankChange} // Handle changes in the rank input
                  className={`mt-1 block w-full rounded-md border ${
                    rankError ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {rankError && (
                  <p className="mt-1 text-sm text-red-500">{rankError}</p> // Display error message if there is an error
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  2. Update your Percentile
                </label>
                <input
                  type="text"
                  value={percentile}
                  onChange={handlePercentileChange} // Handle changes in the percentile input
                  className={`mt-1 block w-full rounded-md border ${
                    percentileError ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {percentileError && (
                  <p className="mt-1 text-sm text-red-500">{percentileError}</p> // Display error message if there is an error
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  3. Update your Current Score (out of 15)
                </label>
                <input
                  type="text"
                  value={score}
                  onChange={handleScoreChange} // Handle changes in the score input
                  className={`mt-1 block w-full rounded-md border ${
                    scoreError ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {scoreError && (
                  <p className="mt-1 text-sm text-red-500">{scoreError}</p> // Display error message if there is an error
                )}
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <Button
                className="bg-gray-200 text-blue-800 px-4 py-2 rounded-md"
                onClick={closeModal} // Handle closing the modal
              >
                Cancel
              </Button>
              <Button
                className="bg-blue-800 text-white px-4 py-2 rounded-md flex items-center"
                onClick={() => onSave(score, rank, percentile)} // Handle save action and pass the updated values back to the parent
              >
                Save
                <ArrowRightIcon className="h-5 w-5 ml-2" />{" "}
                {/* Add the ArrowRightIcon */}
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
