/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // Make Monaco Editor work correctly
  transpilePackages: ['monaco-editor'],

  // Required to remove cross-origin warnings during development
  // Replace YOUR-VERCEL-URL with your actual deployed domain
  allowedDevOrigins: [
    'http://localhost:3000'
  ],
};

module.exports = nextConfig;
