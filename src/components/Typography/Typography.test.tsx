import React from 'react';
import {render} from '@testing-library/react-native';

import Typography, {typographyType} from './index';

jest.mock('hooks/useThemeStyle', () => () => ({
  style: {
    title: {fontSize: 24},
    subtitle: {fontSize: 20},
    error: {color: 'red'},
    body: {fontSize: 16},
    text: {fontSize: 14},
    subText: {fontSize: 12},
  },
}));

describe('Typography', () => {
  const text = 'Test Typography';

  it('renders with default "body" variant', () => {
    const {getByText} = render(<Typography>{text}</Typography>);
    const renderedText = getByText(text);
    expect(renderedText).toBeTruthy();
  });

  Object.keys(typographyType).forEach(variant => {
    it(`renders with "${variant}" variant`, () => {
      const {getByText} = render(<Typography variant={variant as 'title'}>{text}</Typography>);
      expect(getByText(text)).toBeTruthy();
    });
  });

  it('applies custom style', () => {
    const {getByText} = render(<Typography style={{color: 'blue'}}>{text}</Typography>);
    const element = getByText(text);
    expect(element.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({fontSize: 16}),
        expect.objectContaining({color: 'blue'}),
      ]),
    );
  });

  it('forwards additional props', () => {
    const {getByText} = render(<Typography testID="custom-text">{text}</Typography>);
    expect(getByText(text).props.testID).toBe('custom-text');
  });
});
