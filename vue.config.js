const px2rem = require('postcss-px2rem');
const postcss = px2rem({
  remUnit: 75   
})


module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  
  devServer:{
    open:true,
    proxy:{
      '/4444': {
          target: 'http://localhost:4444',
          changeOrigin: true,
          pathRewrite:{
              "^/4444":""
          }
      }
  }
  }

}