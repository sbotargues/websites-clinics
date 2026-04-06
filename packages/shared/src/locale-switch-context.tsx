"use client";

import { createContext, useContext, useCallback, type ReactNode } from "react";

type SwitchLocaleFn = (locale: string) => void;

const LocaleSwitchContext = createContext<SwitchLocaleFn | null>(null);

export function LocaleSwitchProvider({
  switchLocale,
  children,
}: {
  switchLocale: SwitchLocaleFn;
  children: ReactNode;
}) {
  return (
    <LocaleSwitchContext.Provider value={switchLocale}>
      {children}
    </LocaleSwitchContext.Provider>
  );
}

export function useLocaleSwitch(): SwitchLocaleFn {
  const ctx = useContext(LocaleSwitchContext);
  if (!ctx) {
    throw new Error("useLocaleSwitch must be used inside <LocaleSwitchProvider>");
  }
  return ctx;
}

export { LocaleSwitchContext };
