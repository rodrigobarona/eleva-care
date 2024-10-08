/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL(process.env.NEXT_PUBLIC_IMGIX_URL).hostname, // Use the environment variable
      },
    ],
    loader: 'custom',
    loaderFile: './loader.js',
  },
};

export default nextConfig;
