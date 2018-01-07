module.exports = {
  webpack: (config, { dev }) => {
    const ExtractTextPlugin = require('extract-text-webpack-plugin');
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')]
              }
            },
          ],
        })
      }
    );
    config.plugins.push(new ExtractTextPlugin("styles.css"));
    return config;
  }
}