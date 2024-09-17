/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "ads-partners.coupang.com" },
      { hostname: "*.coupangcdn.com" },
    ],
  },
};

export default nextConfig;
