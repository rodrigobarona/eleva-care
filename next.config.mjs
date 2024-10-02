/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'stream.mux.com' },
      { protocol: 'https', hostname: 'image.mux.com' },
    ],
  },
};

export default nextConfig;
