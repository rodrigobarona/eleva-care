module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eleva-care-preview.imgix.net',
      },
    ],
    loader: 'custom',
    loaderFile: './loader.js',
  },
};
