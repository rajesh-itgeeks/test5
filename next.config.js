// if (!process.env.WORDPRESS_API_URL) {
//   throw new Error(`
//     Please provide a valid WordPress instance URL.
//     Add to your environment variables WORDPRESS_API_URL.
//   `);
// }

module.exports = {
  // experimental: {
  //   appDir: true,
  // },
  trailingSlash: true,
  sassOptions: {
    includePaths: ["./"],
    prependData: `@import "styles/util/_variables.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        // port: "",
        // pathname: "/wp-content/uploads/**",
      },
    ],
  },
};
