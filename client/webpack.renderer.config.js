const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  externals: {
    electron: 'commonjs2 electron',
  },
  module: {
    rules,
  },

};
