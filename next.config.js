const baseConfig = require('./next.config.base');

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...baseConfig,
  env: {
    NEXTAUTH_URL: "http://68.183.29.239:3000",
  },
};

module.exports = nextConfig;
