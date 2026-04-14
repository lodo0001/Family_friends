/** @type {import('next').NextConfig} */
const nextConfig = {
  // cacheComponents findes ikke i standard Next.js config,
  // så den har jeg fjernet for at undgå fejl.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.thedogapi.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
