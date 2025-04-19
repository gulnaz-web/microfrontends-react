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
         exposes: {},
         remotes: {
            // react_front - Имя нашего модуля, в нашем случае имя микрофронта в package.json,
            // http://localhost:3001/remoteEntry.js - адресс на котором развернут микрофронт
            react_front: 'react_front@http://localhost:3001/remoteEntry.js',
         },
      }),
   );
   return config;
};

module.exports = [
   (config) => {
      config.output.publicPath = `//localhost:3000/`;
      return addPlugins(config);
   },
];
