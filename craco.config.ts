// @ts-ignore
const path = require("path");
// @ts-ignore
const resolve = (dir) => {
  return path.resolve(__dirname, dir);
};

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
};
