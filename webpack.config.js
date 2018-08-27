const isProduction = process.env.NODE_ENV === 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = { 
 mode: isProduction ? "production" : "development",
  context: __dirname,
  entry:  {
      style: './src/style.scss',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'sass-loader',
              'postcss-loader'
            ]
          })
        // use: ExtractTextPlugin.extract({
        //   loader: 'style-loader', // inject CSS to page
        // }, {
        //   loader: 'css-loader', // translates CSS into CommonJS modules
        // }, {
        //   loader: 'postcss-loader', // Run post css actions
        //   options: {
        //     plugins: function () { // post css plugins, can be exported to postcss.config.js
        //       return [
        //         require('precss'),
        //         require('autoprefixer')
        //       ];
        //     }
        //   }
        // }, {
        //   loader: 'sass-loader' // compiles Sass to CSS
        // })


      },
      
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css", {
            allChunks: true
        })
  ]
}