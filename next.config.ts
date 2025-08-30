import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure for better Vercel deployment
  experimental: {
    optimizeCss: false,
  },
  
  // Ensure proper build output
  output: 'standalone',
  
  // Fix workspace root warning
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
