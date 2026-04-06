"use client";

import { useEffect, useRef, useState } from "react";

type BannerCopy = {
  message: string;
  policyLink: string;
  accept: string;
  reject: string;
  manage: string;
  dialogTitle: string;
  dialogDescription: string;
  essentialLabel: string;
  essentialHint: string;
  analyticsLabel: string;
  analyticsHint: string;
  save: string;
  cancel: string;
};

type ConsentState = "accepted" | "rejected";

interface CookieConsentProps {
  locale: string;
  copy: BannerCopy;
}

const STORAGE_KEY = "wc_cookie_consent_v1";

function cookiePolicyPath(locale: string) {
  return locale === "es" ? "/cookies" : `/${locale}/cookies`;
}

export function CookieConsent({ locale, copy }: CookieConsentProps) {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "accepted" || saved === "rejected") {
      setConsent(saved);
      setAnalyticsEnabled(saved === "accepted");
    }
    setReady(true);
  }, []);

  const saveConsent = (next: ConsentState) => {
    setConsent(next);
    setAnalyticsEnabled(next === "accepted");
    window.localStorage.setItem(STORAGE_KEY, next);
    if (dialogRef.current?.open) dialogRef.current.close();
  };

  const openDialog = () => {
    if (!dialogRef.current) return;
    if (!dialogRef.current.open) dialogRef.current.showModal();
  };

  const closeDialog = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
  };

  // Avoid a hydration flash: wait until localStorage consent has been loaded.
  if (!ready) return null;

  return (
    <>
      {consent === null && (
        <aside className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 z-[120] rounded-2xl border border-border bg-white shadow-xl p-4 sm:p-5">
          <div className="max-w-6xl mx-auto flex flex-col gap-3 sm:gap-4">
            <p className="text-sm text-foreground leading-relaxed">
              {copy.message} {" "}
              <a href={cookiePolicyPath(locale)} className="underline text-primary hover:text-primary-dark">
                {copy.policyLink}
              </a>
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => saveConsent("accepted")}
                className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                {copy.accept}
              </button>
              <button
                onClick={() => saveConsent("rejected")}
                className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted-bg transition-colors"
              >
                {copy.reject}
              </button>
              <button
                onClick={openDialog}
                className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted-bg transition-colors"
              >
                {copy.manage}
              </button>
            </div>
          </div>
        </aside>
      )}

      <dialog ref={dialogRef} className="w-[92vw] max-w-lg rounded-2xl border border-border p-0 backdrop:bg-black/35">
        <div className="p-5 sm:p-6">
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">{copy.dialogTitle}</h3>
          <p className="text-sm text-muted mb-5">{copy.dialogDescription}</p>

          <div className="space-y-4">
            <div className="rounded-xl border border-border p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{copy.essentialLabel}</p>
                  <p className="text-xs text-muted">{copy.essentialHint}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-md bg-muted-bg text-muted">ON</span>
              </div>
            </div>

            <label className="rounded-xl border border-border p-4 flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
              />
              <span>
                <span className="block text-sm font-medium text-foreground">{copy.analyticsLabel}</span>
                <span className="block text-xs text-muted">{copy.analyticsHint}</span>
              </span>
            </label>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => saveConsent(analyticsEnabled ? "accepted" : "rejected")}
              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              {copy.save}
            </button>
            <button
              onClick={closeDialog}
              className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted-bg transition-colors"
            >
              {copy.cancel}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
