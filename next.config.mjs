/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eleva-care-preview.imgix.net',
      },
    ],
    loader: 'custom',
    loaderFile: './app/loader.js',
  },
};

export default nextConfig;
