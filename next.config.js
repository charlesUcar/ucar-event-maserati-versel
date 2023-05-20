/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: '.',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: [
      'i.pravatar.cc',
      'hips.hearstapps.com',
      'image.u-car.com.tw',
      'image.cache.u-car.com.tw',
      'i3.ytimg.com',
    ],
  },
  // output: 'export',
  // distDir: 'out',
};

module.exports = nextConfig;
