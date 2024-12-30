/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gugi-bucket.s3.ap-northeast-2.amazonaws.com'],
    // domains: ['gugi-s3.s3.ap-northeast-2.amazonaws.com'],
  },

  // reactStrictMode: true,
  // // async rewrites() {
  // //   return [
  // //     {
  // //       source: '/',
  // //       destination: 'https://team-gugi.site',
  // //     },
  // //   ];
  // // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'https://team-gugi.site/:path*',
  //     },
  //   ];
  // },

  // images: {
  //   // 이전 방식
  //   // domains: ['example.com'],

  //   // 새로운 방식
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'gugi-s3.s3.ap-northeast-2.amazonaws.com',
  //     },
  //   ],
  // },
};

export default nextConfig;
