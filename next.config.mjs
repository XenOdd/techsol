/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: 'export',
  basePath: isProd ? '/techsol' : '',
  assetPrefix: isProd ? '/techsol/' : '',
  // experimental: { optimizeCss: true }, // Keep if critters is installed
};
export default nextConfig;