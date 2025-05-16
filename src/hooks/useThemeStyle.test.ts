import {renderHook} from '@testing-library/react-hooks';
import {StyleSheet} from 'react-native';
import useThemeStyle from './useThemeStyle';
import * as ThemeProvider from 'theme/ThemeProvider';
import { ThemeTypes } from 'theme/types';

const mockTheme = {
  colors: {
    White: '#FFFFFF',
    PrimaryColor: '#0000FF',
  },
  scaleMethods: {
    scale: (size: number) => size,
    scaleFont: (size: number) => size,
    scaleModerate: (size: number) => size,
    scaleVertical: (size: number) => size,
  },
  isDark: false,
  themeColorMode: 'light',
  onChangeColorScheme: jest.fn(),
  currentThemeMode: 'light',
} as unknown as ThemeTypes;

jest.spyOn(ThemeProvider, 'useThemeScheme').mockReturnValue(mockTheme);

describe('useThemeStyle', () => {
  it('should return theme values and computed style', () => {
    const styleCallback = (theme: typeof mockTheme) =>
      StyleSheet.create({
        container: {
          backgroundColor: theme.colors.White,
        },
      });

    const {result} = renderHook(() => useThemeStyle(styleCallback));

    expect(result.current.colors).toEqual(mockTheme.colors);
    expect(result.current.style.container.backgroundColor).toBe('#FFFFFF');
  });

  it('should memoize the result across rerenders if theme and callback do not change', () => {
    const styleCallback = jest.fn((theme: typeof mockTheme) =>
      StyleSheet.create({
        container: {
          backgroundColor: theme.colors.White,
        },
      }),
    );

    const {result, rerender} = renderHook(() => useThemeStyle(styleCallback));

    const firstStyle = result.current.style;
    rerender();
    const secondStyle = result.current.style;

    expect(styleCallback).toHaveBeenCalledTimes(1);
    expect(firstStyle).toBe(secondStyle);
  });
});
