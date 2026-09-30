/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Images in public/ are already resized and saved as WebP, so they are
    // served as they are. This avoids Vercel's image optimization, whose
    // free quota ran out and made /_next/image return 402.
    unoptimized: true,
  },
  experimental: {
    // Page transitions through React's <ViewTransition> (see src/app/layout.js).
    viewTransition: true,
  },
};

export default nextConfig;
