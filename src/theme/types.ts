import {StyleProp, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {commonColor} from './colors';

export type TScaleMethods = {
  scale: (size: number) => number;
  scaleFont: (size: number) => number;
  scaleModerate: (size: number) => number;
  scaleVertical: (size: number) => number;
};

export type TColors = ColorTheme;

export type ColorPalettes = {
  light: TColors;
  dark: TColors;
};

export type ColorTheme = typeof commonColor;

export type ThemeTypes = {
  onChangeColorScheme: (mode: string) => void;
  colors: TColors;
  themeColorMode: ThemeMode;
  isDark: boolean;
  scaleMethods: TScaleMethods;
  style?: StyleProp<TextStyle | ViewStyle | ImageStyle>;
};

export type ThemeMode = 'light' | 'dark';
