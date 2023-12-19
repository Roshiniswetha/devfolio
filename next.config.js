// `next-pwa` config should be passed here
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});

// Use `withPWA` and pass general Next.js config
module.exports = withPWA({    
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
  },
  images: {
      domains: ["pbs.twimg.com", "img.icons8.com", "gateway.moralisipfs.com", "ipfs.moralis.io", "lh3.googleusercontent.com", "www.artnews.com"]
  },
  output: "standalone"
});