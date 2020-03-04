import initStoryshots from '@storybook/addon-storyshots';
import path from 'path';

jest.mock('react-native', () => {
  const RN = require.requireActual('react-native');
  RN.AccessibilityInfo = undefined;
  return new Proxy(
    {},
    {
      get: (_obj, prop) => {
        if (prop === 'AccessibilityInfo') {
          return undefined;
        }
        return RN[prop];
      },
    },
  );
});

initStoryshots({
  framework: 'react-native',
  configPath: path.join(__dirname, '../native/storybook'),
});
