import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
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
