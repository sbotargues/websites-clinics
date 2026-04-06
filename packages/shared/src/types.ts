// ── License ───────────────────────────────────────────────────────────────────

export type LicenseStatus = "ACTIVE" | "EXPIRED" | "REVOKED" | "SUSPENDED";

export interface License {
  id: string;
  key: string;
  userId: string;
  mt5Account: string | null;
  botType: string;
  status: LicenseStatus;
  activatedAt: Date | null;
  expiresAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

// ── Subscription ──────────────────────────────────────────────────────────────

export type SubscriptionStatus =
  | "ACTIVE"
  | "PAST_DUE"
  | "CANCELED"
  | "UNPAID"
  | "TRIALING";

export interface Subscription {
  id: string;
  userId: string;
  stripeSubscriptionId: string;
  stripePriceId: string;
  planId: string;
  status: SubscriptionStatus;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
}

// ── User ──────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  name: string | null;
  supabaseId: string;
  stripeCustomerId: string | null;
  setupCompleted: boolean;
}

// ── License verification ──────────────────────────────────────────────────────

export interface LicenseVerifyRequest {
  key: string;
  account: string;
}

export interface LicenseVerifyResponse {
  valid: boolean;
  status: LicenseStatus | null;
  botType: string | null;
  expiresAt: string | null;
  message: string;
}

// ── Plan ──────────────────────────────────────────────────────────────────────

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: "month" | "year" | "one-time";
  features: string[];
  stripePriceId: string;
  maxLicenses: number;
}
