/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "ads-partners.coupang.com" },
      { hostname: "*.coupangcdn.com" },
    ],
  },
};

export default nextConfig;
