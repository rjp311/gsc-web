module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    )
    return cfg;
  },
  // exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId }) {
  //   const pathMap = {
  //     "/": {page: "/home"}
  //   }

  //   return pathMap;
  // },
  redirects: async function () {
    let redirs = [
      {
        source: "/",
        destination: "/home",
        permanent: true
      }
    ]

    return redirs;
  }
}