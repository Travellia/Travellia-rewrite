/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Under Construction: redirect every path except / back to / ──
  async redirects() {
    return [
      {
        source: '/:path+',   // matches /anything but NOT /
        destination: '/',
        permanent: false,    // 307 — easy to remove later
      },
    ];
  },
  // ────────────────────────────────────────────────────────────────
};

export default nextConfig;
