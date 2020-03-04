import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Styles } from 'reactxp';
import { Button } from '.';

const Separator = () => <View style={Styles.createViewStyle({ height: 10 })} />;

storiesOf('Button component', module)
  .add('All Variants', () => {
    return (
      <View
        style={Styles.createViewStyle({
          flexDirection: 'row',
          justifyContent: 'space-around',
        })}>
        <View style={Styles.createViewStyle({ width: 200 })}>
          <Button label='Click me' type='primary' />
          <Separator />
          <Button label='Click me' type='primary' disabled />
          <Separator />
          <Button label='Click me' type='secondary' />
          <Separator />
          <Button label='Click me' type='secondary' disabled />
          <Separator />
          <Button label='Click me' type='tertiary' />
          <Separator />
          <Button label='Click me' type='primary' disabled />
        </View>
      </View>
    );
  })
  .add('Test', () => <Button label='Click me' type='secondary' />);
