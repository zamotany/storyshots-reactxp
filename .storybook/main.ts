module.exports = {
  stories: ['../**/*.stories.[tj]sx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-knobs/register' ],
  webpackFinal: async config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@storybook/react-native': '@storybook/react',
      },
    },
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
