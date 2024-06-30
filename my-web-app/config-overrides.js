const { override, addWebpackPlugin, addWebpackAlias } = require('customize-cra');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    'react-native$': 'react-native-web',
  }),
  addWebpackPlugin(
    new ModuleFederationPlugin({
      name: 'my-web-app',
      remotes: {
        issuerPage: 'issuerPage@http://localhost:8083/remoteEntry.js',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    })
  )
);
