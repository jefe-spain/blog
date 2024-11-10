const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  }
};

module.exports = withMDX(nextConfig);
