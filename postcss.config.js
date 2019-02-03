module.exports = {
  plugins: [
    require('postcss-import')(),    
    require('autoprefixer')({ browsers: ['last 10 versions', '> 1%'] })
  ]
}