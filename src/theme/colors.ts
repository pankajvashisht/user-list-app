import {ColorPalettes} from './types';

export const commonColor = {
  PrimaryColor: '#0000ff',
  SecondaryColor: '#F9CA13',
  BackgroundColor: '#1C1C1C',
  PrimaryText: '#656565',
  SecondaryText: '#989898',
  Error: 'red',
  White: '#ffffff',
  Grey: '#d9e6fb',
  TextColor: '#3a3a3a',
  IconGrey: '#666',
  WhiteSmoke: '#f4f6fa',
  TitanWhite: '#e6f0fd',
  SkyBlue: '#007AFF',
  InputColor: '#ccc',
};

const colorScheme: ColorPalettes = {
  dark: {
    ...commonColor,
  },
  light: {
    ...commonColor,
  },
};

export {colorScheme};
