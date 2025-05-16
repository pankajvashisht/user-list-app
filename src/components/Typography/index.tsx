import useThemeStyle from 'hooks/useThemeStyle';
import React from 'react';
import {Text, TextProps} from 'react-native';

import Styles from './styles';

type variant = 'title' | 'subtitle' | 'error' | 'body' | 'text' | 'subText';

type TypographyProps = TextProps & {
  variant?: variant;
  color?: string;
  children: React.ReactNode;
};

export const typographyType = {
  title: 'title',
  subtitle: 'subtitle',
  error: 'error',
  body: 'body',
  text: 'text',
  subText: 'subText',
} satisfies Record<variant, variant>;

const Typography = ({variant = 'body', children, style, ...props}: TypographyProps) => {
  const {style: styles} = useThemeStyle(Styles);

  return (
    <Text style={[styles[variant], style]} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
