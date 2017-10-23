var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

webpack(webpackConfig, (res, err) => {
  if(err){
    console.log('Errors webpacking ' + err);    
  }
});