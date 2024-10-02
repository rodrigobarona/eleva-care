/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    domains: ['stream.mux.com', 'image.mux.com'],
  },
};

export default nextConfig;
