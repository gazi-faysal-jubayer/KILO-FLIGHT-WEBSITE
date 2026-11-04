/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // ThreeUI sources import their HTML documents Vite-style (`./x.html?raw`)
  webpack(config) {
    config.module.rules.push({ resourceQuery: /raw/, type: 'asset/source' });
    return config;
  },
};

export default nextConfig;
