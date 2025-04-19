// https://webpack.js.org/plugins/module-federation-plugin/
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { name, dependencies: deps } = require('./package.json');

const addPlugins = (config) => {
   config.plugins.unshift(
      new ModuleFederationPlugin({
         name,
         shared: {
            ...deps,
         },
         filename: 'remoteEntry.js',
         exposes: {
            './App': './src/App',
            './GoalsSection': './src/components/GoalsSection',
            './StatisticsSection': './src/components/StatisticsSection',
            './TransactionsSection': './src/components/TransactionsSection',
            './NewTransactionSection': './src/components/NewTransactionSection',
         },
         remotes: {},
      }),
   );
   return config;
};

module.exports = [
   (config) => {
      config.output.publicPath = '//localhost:3001/';
      return addPlugins(config);
   },
];
