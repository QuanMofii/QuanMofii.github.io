// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ Bắt buộc nếu dùng next export
  },
};

module.exports = nextConfig;
