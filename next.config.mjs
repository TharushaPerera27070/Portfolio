/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg", "via.placeholder.com"],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
