// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ Bắt buộc nếu dùng next export
  },
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
  basePath: '/portfolio', // 👈 thêm dòng này nếu deploy subpath
  assetPrefix: '/portfolio',
};

module.exports = nextConfig;
