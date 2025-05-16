/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { JSX } from 'react';
import {render} from '@testing-library/react-native';
import {Text} from 'react-native';

import ListViewElement from './index';

describe('ListViewElement', () => {
  it('renders nothing when data is undefined', () => {
    const {toJSON} = render(<ListViewElement renderItem={() => null} />);
    expect(toJSON()).toBeNull();
  });

  it('renders nothing when data is empty array', () => {
    const {toJSON} = render(<ListViewElement data={[]} renderItem={() => null} />);
    expect(toJSON()).toBeNull();
  });

  it('renders list of items using renderItem', () => {
    const data = ['Item 1', 'Item 2', 'Item 3'];

    const {getByText} = render(
      <ListViewElement data={data} renderItem={item => <Text>{item}</Text>} />,
    );

    data.forEach(item => {
      expect(getByText(item)).toBeTruthy();
    });
  });

  
  it('passes correct index to renderItem', () => {
    const data = ['One', 'Two', 'Three'];
    
    const mockRenderItem = jest.fn((item: string, index: number): JSX.Element => {
      return <Text>{`${index}: ${item}`}</Text>;
    });

    const { getByText } = render(<ListViewElement data={data} renderItem={mockRenderItem} />);

    data.forEach((item, index) => {
      expect(getByText(`${index}: ${item}`)).toBeTruthy();
    });

    expect(mockRenderItem).toHaveBeenCalledTimes(data.length);
    expect(mockRenderItem).toHaveBeenCalledWith('One', 0);
    expect(mockRenderItem).toHaveBeenCalledWith('Two', 1);
    expect(mockRenderItem).toHaveBeenCalledWith('Three', 2);
  });
});
