/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Page transitions through React's <ViewTransition> (see src/app/layout.js).
    viewTransition: true,
  },
};

export default nextConfig;
