"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  duration?: number;
  onClose: () => void;
}

export function Toast({ message, type = "success", duration = 5000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Trigger enter animation
    requestAnimationFrame(() => setVisible(true));

    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  function handleClose() {
    setExiting(true);
    setTimeout(onClose, 300);
  }

  const isSuccess = type === "success";

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`fixed top-4 right-4 z-50 flex items-start gap-3 max-w-sm w-full rounded-xl px-4 py-3 shadow-lg border transition-all duration-300 ${
        visible && !exiting
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      } ${
        isSuccess
          ? "bg-primary-light border-primary/20"
          : "bg-red-50 border-red-200"
      }`}
    >
      {/* Icon */}
      <div className={`mt-0.5 flex-shrink-0 ${isSuccess ? "text-primary" : "text-red-500"}`}>
        {isSuccess ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        )}
      </div>

      {/* Message */}
      <p className={`text-sm font-medium flex-1 ${isSuccess ? "text-primary-dark" : "text-red-700"}`}>
        {message}
      </p>

      {/* Close button */}
      <button
        onClick={handleClose}
        className={`flex-shrink-0 mt-0.5 rounded-full p-0.5 transition-colors ${
          isSuccess
            ? "text-primary/50 hover:text-primary hover:bg-primary/10"
            : "text-red-400 hover:text-red-600 hover:bg-red-100"
        }`}
        aria-label="Close"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
