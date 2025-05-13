// next.config.js
const isProd = process.env.NODE_ENV === 'production';
const prefix = process.env.NEXT_PUBLIC_BASE_PATH ;
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
  trailingSlash: true,
  assetPrefix: isProd ? prefix : '',
  basePath: isProd ? prefix : '',
  output: 'export'
};

module.exports = nextConfig;
