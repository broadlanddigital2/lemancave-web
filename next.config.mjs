/** @type {import('next').NextConfig} */
// Static export, served by the Cloudflare Worker in worker/index.js (see wrangler.jsonc).
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
};
export default nextConfig;
