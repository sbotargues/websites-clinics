import type { License, Subscription } from "@scope/shared";
import { Card, CardTitle, CardContent, Badge, Button } from "@scope/ui";

const statusVariant: Record<string, "success" | "warning" | "error" | "default"> = {
  ACTIVE: "success",
  TRIALING: "success",
  PAST_DUE: "warning",
  EXPIRED: "error",
  REVOKED: "error",
  CANCELED: "error",
  SUSPENDED: "warning",
  UNPAID: "error",
};

interface DashboardPageProps {
  t: {
    title: string;
    subscription: string;
    licenses: string;
    noLicenses: string;
    plan: string;
    status: string;
    key: string;
    account: string;
    bot: string;
    expires: string;
    manageBilling: string;
  };
  // Will be populated when auth + data packages are wired
  subscription: Subscription | null;
  licenses: License[];
  locale: string;
}

export function DashboardPage({ t, subscription, licenses, locale }: DashboardPageProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-heading font-bold text-white">{t.title}</h1>

      {/* Subscription card */}
      <Card>
        <CardTitle>{t.subscription}</CardTitle>
        <CardContent>
          {subscription ? (
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-white text-sm">{t.plan}: <span className="text-gold font-medium">{subscription.planId}</span></p>
                <Badge variant={statusVariant[subscription.status] ?? "default"}>{subscription.status}</Badge>
              </div>
              <Button variant="secondary" size="sm">{t.manageBilling}</Button>
            </div>
          ) : (
            <p className="text-white/40 text-sm">{t.noLicenses}</p>
          )}
        </CardContent>
      </Card>

      {/* Licenses */}
      <Card>
        <CardTitle>{t.licenses}</CardTitle>
        <CardContent>
          {licenses.length === 0 ? (
            <p className="text-white/40 text-sm">{t.noLicenses}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-white/40 border-b border-white/5">
                    <th className="pb-2 font-medium">{t.key}</th>
                    <th className="pb-2 font-medium">{t.bot}</th>
                    <th className="pb-2 font-medium">{t.account}</th>
                    <th className="pb-2 font-medium">{t.status}</th>
                    <th className="pb-2 font-medium">{t.expires}</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  {licenses.map((lic) => (
                    <tr key={lic.id} className="border-b border-white/5">
                      <td className="py-3 font-mono text-xs">{lic.key.slice(0, 12)}…</td>
                      <td className="py-3">{lic.botType}</td>
                      <td className="py-3">{lic.mt5Account ?? "—"}</td>
                      <td className="py-3"><Badge variant={statusVariant[lic.status] ?? "default"}>{lic.status}</Badge></td>
                      <td className="py-3 text-white/40">{lic.expiresAt ? new Date(lic.expiresAt).toLocaleDateString() : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
