"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  duration?: number;
  onClose: () => void;
}

export function Toast({ message, type = "success", duration = 5000, onClose }: ToastProps) {
  const [phase, setPhase] = useState<"enter" | "visible" | "exit">("enter");

  useEffect(() => {
    // Double rAF ensures the browser has painted the initial state before transitioning
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setPhase("visible"));
      return () => cancelAnimationFrame(raf2);
    });

    const timer = setTimeout(() => {
      setPhase("exit");
      setTimeout(onClose, 350);
    }, duration);

    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  function handleClose() {
    setPhase("exit");
    setTimeout(onClose, 350);
  }

  const isSuccess = type === "success";

  return (
    <div
      role="alert"
      aria-live="assertive"
      style={{
        transform: phase === "visible" ? "translateX(0)" : "translateX(110%)",
        opacity: phase === "visible" ? 1 : 0,
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease",
      }}
      className={`fixed top-4 right-4 z-[9999] flex items-start gap-3 max-w-sm w-full rounded-xl px-4 py-3.5 shadow-2xl border-2 ${
        isSuccess
          ? "bg-white border-primary shadow-primary/20"
          : "bg-white border-red-400 shadow-red-200"
      }`}
    >
      {/* Icon */}
      <div className={`mt-0.5 flex-shrink-0 rounded-full p-1 ${isSuccess ? "bg-primary/10 text-primary" : "bg-red-50 text-red-500"}`}>
        {isSuccess ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        )}
      </div>

      {/* Message */}
      <p className={`text-sm font-semibold flex-1 leading-snug ${isSuccess ? "text-foreground" : "text-red-700"}`}>
        {message}
      </p>

      {/* Close button */}
      <button
        onClick={handleClose}
        className="flex-shrink-0 mt-0.5 rounded-full p-1 text-muted hover:text-foreground hover:bg-muted-bg transition-colors"
        aria-label="Close"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
