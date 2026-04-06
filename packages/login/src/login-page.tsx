"use client";

import { APP_NAME } from "@scope/shared";
import { Button, Input } from "@scope/ui";

interface LoginPageProps {
  t: {
    title: string;
    email: string;
    password: string;
    submit: string;
    noAccount: string;
    register: string;
  };
  locale: string;
}

export function LoginPage({ t, locale }: LoginPageProps) {
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <a href={`${prefix}/`} className="text-gold font-bold text-2xl tracking-tight">
            {APP_NAME}
          </a>
        </div>
        <div className="bg-graphite rounded-2xl border border-white/10 p-8">
          <h1 className="text-xl font-semibold text-white mb-6">{t.title}</h1>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input id="email" label={t.email} type="email" placeholder="you@example.com" />
            <Input id="password" label={t.password} type="password" placeholder="••••••••" />
            <Button className="w-full">{t.submit}</Button>
          </form>
          <p className="mt-6 text-center text-sm text-white/40">
            {t.noAccount}{" "}
            <a href={`${prefix}/register`} className="text-gold hover:underline">
              {t.register}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
