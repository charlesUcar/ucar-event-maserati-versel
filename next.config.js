/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.pravatar.cc',
      'hips.hearstapps.com',
      'image.u-car.com.tw',
      'image.cache.u-car.com.tw',
    ],
  },
};

module.exports = nextConfig;
