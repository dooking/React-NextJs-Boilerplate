/** @type {import('next').NextConfig} */
const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: [
      'd1u043k7pheoq9.cloudfront.net',
      'bidi-ai.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
});
