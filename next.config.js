/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: '.',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // loader: 'akamai',
    // path: '',
    unoptimized: true,
    domains: [
      'i.pravatar.cc',
      'hips.hearstapps.com',
      'image.u-car.com.tw',
      'image.cache.u-car.com.tw',
      'i3.ytimg.com',
      'localhost:3000',
      'maserati.event.u-car.com.tw',
      'ucar-event-maserati-versel-qno074o78-charlesucar.vercel.app',
    ],
  },
  // output: 'export',
  // distDir: 'out',
};

module.exports = nextConfig;
