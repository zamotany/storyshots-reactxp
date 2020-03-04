module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    },
    native: {
      presets: ['module:metro-react-native-babel-preset'],
    }
  },
};
