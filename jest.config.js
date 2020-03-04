const BASE_EXT = ['tsx', 'ts', 'jsx', 'js', 'json'];

function getExtensions(prefixes) {
  const moduleFileExtensions = [];

  prefixes.forEach(prefix => {
    moduleFileExtensions.push(...BASE_EXT.map(ext => `${prefix}.${ext}`));
  });

  return moduleFileExtensions.concat(...BASE_EXT);
}

module.exports = {
  verbose: true,
  projects: [
    {
      displayName: { name: 'web', color: 'magenta' },
      testRegex: 'web\\.(test|spec)\\.(ts|tsx|js)$',
      transform: {
        '^.+\\.(js|ts|tsx)$': 'babel-jest',
      },
      moduleNameMapper: {
        "@storybook/react-native": "@storybook/react"
      },
      moduleFileExtensions: getExtensions(['web']),
      testEnvironment: 'node',
      testPathIgnorePatterns: ['/node_modules/'],
    },
    {
      displayName: { name: 'ios', color: 'white' },
      testRegex: 'ios\\.(test|spec)\\.(ts|tsx|js)$',
      preset: 'react-native',
      transform: {
        '^.+\\.(js|ts|tsx)$': ['babel-jest', { envName: 'native' }],
      },
      haste: {
        defaultPlatform: 'ios',
        platforms: ['ios', 'native'],
      },
      moduleFileExtensions: getExtensions(['ios', 'native'])
    },
    {
      displayName: { name: 'android', color: 'blueBright' },
      testRegex: 'android\\.(test|spec)\\.(ts|tsx|js)$',
      preset: 'react-native',
      transform: {
        '^.+\\.(js|ts|tsx)$': ['babel-jest', { envName: 'native' }],
      },
      haste: {
        defaultPlatform: 'android',
        platforms: ['android', 'native'],
      },
      moduleFileExtensions: getExtensions(['android', 'native'])
    },
  ],
};
