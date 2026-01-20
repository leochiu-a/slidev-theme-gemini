import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/slidev-theme-gemini',
  assetPrefix: '/slidev-theme-gemini/',
};

export default withMDX(config);
