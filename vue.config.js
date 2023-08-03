// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: (config) => {
//     config.module
//       .rule('pdf')
//       .test(/\.pdf$/)
//       .use('file-loader')
//       .loader('file-loader')
//       .options({
//         name: '[name].[ext]',
//       })
//       .end();
//   },
// });
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // Add a new rule to handle PDF files
    config.module
      .rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 8192, // You can adjust this limit (in bytes) based on your project's needs
        name: 'pdf/[name].[hash:8].[ext]', // Output path and filename
      })
      .end();
  },
});
                        

