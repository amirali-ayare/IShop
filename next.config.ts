import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'], // یا هر دامین دیگه‌ای که عکس‌ها ازش میان
  },
  devIndicators: false
};

export default nextConfig;
