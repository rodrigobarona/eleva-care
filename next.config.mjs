/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    remotePatterns: [{ hostname: "stream.mux.com" }],
  },
};

export default nextConfig;
