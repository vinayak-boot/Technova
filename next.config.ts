import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '.',
  // Optional: Change links / to /index.html for file system compatibility if needed, 
  // but usually trailingSlash: true is better for static hosting.
  // For opening directly as file, standard export is best effort.
};

export default nextConfig;
