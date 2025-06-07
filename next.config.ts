import type { NextConfig } from "next";

// @type {import('next').NextConfig}
const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["example.com"],
    unoptimized: true,
  },

  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  publicRuntimeConfig: {},
  serverRuntimeConfig: {
    ANOTHER_KEY: process.env.ANOTHER_KEY,
  },
  webpack: (config) => {
    return config;
  },
};


export default nextConfig;
