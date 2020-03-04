import React, { FunctionComponent, useState, useCallback } from 'react';
import { Styles, Text, Button as ButtonXP, Platform } from 'reactxp';

type Props = {
  label: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
};

const styles = {
  containerBase: Styles.createButtonStyle({
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 16,
    paddingVertical: 8,
  }),
  primary: Styles.createButtonStyle({
    backgroundColor: '#0078FF',
  }),
  primaryHoover: Styles.createButtonStyle({
    backgroundColor: '#0064EB',
  }),
  secondary: Styles.createButtonStyle({
    backgroundColor: '#E8EDF1',
  }),
  secondaryHoover: Styles.createButtonStyle({
    backgroundColor: '#CAD5DF',
  }),
  tertiary: Styles.createButtonStyle({
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#252A32',
  }),
  tertiaryHoover: Styles.createButtonStyle({}),
  labelBase: Styles.createTextStyle({
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27,
    textAlign: 'center',
    color: 'white',
  }),
};

export const Button: FunctionComponent<Props> = ({ label, type, disabled }) => {
  const [hasHover, setHasHover] = useState(false);

  return (
    <ButtonXP
      style={[
        styles.containerBase,
        styles[type || 'secondary'],
        hasHover
          ? styles[
              `${type || 'secondary'}Hoover` as
                | 'primaryHoover'
                | 'secondaryHoover'
                | 'tertiaryHoover'
            ]
          : undefined,
      ]}
      title={label}
      disabledOpacity={0.2}
      underlayColor={
        type === 'primary'
          ? '#0064EB'
          : type === 'secondary'
          ? '#CAD5DF'
          : '#FFFFFF'
      }
      disabled={disabled}
      onHoverStart={useCallback(() => setHasHover(true), [])}
      onHoverEnd={useCallback(() => setHasHover(false), [])}
      onPress={() => {
        console.log('pressed');
      }}>
      <Text
        style={[
          styles.labelBase,
          type !== 'primary'
            ? Styles.createTextStyle({ color: '#252A32' })
            : undefined,
        ]}>
        {label} {Platform.select({ ios: 'ios', android: 'android', web: 'web' })}
      </Text>
    </ButtonXP>
  );
};
