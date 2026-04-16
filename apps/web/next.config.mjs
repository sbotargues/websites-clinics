import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force metadata (including <title>) into the initial HTML response.
  // This avoids false negatives in SEO tools that don't process streamed head updates.
  htmlLimitedBots: /.*/,
  transpilePackages: [
    "@scope/config",
    "@scope/shared",
    "@scope/ui",
    "@scope/header",
    "@scope/footer",
    "@scope/landing",
    "@scope/login",
    "@scope/signup",
    "@scope/dashboard",
  ],
};

export default withNextIntl(nextConfig);
