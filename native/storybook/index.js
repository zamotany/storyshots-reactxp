import { AppRegistry } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './stories';

configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  // // onDeviceUI: false,
  // // disableWebsockets: true,
  // host: 'localhost',
  // port: 7007,
});

AppRegistry.registerComponent('UiComponentsExample', () => StorybookUIRoot);

export default StorybookUIRoot;
