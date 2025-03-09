"use client";
import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Button } from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function Modal({ isOpen, closeModal }: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10"
      onClose={closeModal}
    >
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
  );
}
