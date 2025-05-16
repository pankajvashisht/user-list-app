import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UserTypeFilter from './index';
import {testIdSelectSlot} from 'utils/testIds';

jest.mock('hooks/useThemeStyle', () => () => ({
  style: {
    option: {padding: 10},
    selectedOption: {backgroundColor: 'blue'},
    radioCircle: {borderWidth: 1},
    selectedDot: {width: 10, height: 10},
  },
}));

jest.mock('constants/appConstant', () => ({
  userTypes: [
    {name: 'Admin', value: 'ADMIN'},
    {name: 'Manager', value: 'MANGER'},
  ],
}));

describe('UserTypeFilter', () => {
  const onSelectMock = jest.fn();

  const setup = (selected: 'ADMIN' | 'MANGER' | null = null) =>
    render(<UserTypeFilter selected={selected} onSelect={onSelectMock} />);

  beforeEach(() => {
    onSelectMock.mockClear();
  });

  it('renders both user types', () => {
    const {getByText} = setup();

    expect(getByText('Admin')).toBeTruthy();
    expect(getByText('Manager')).toBeTruthy();
  });

  it('calls onSelect with correct value when a user type is pressed', () => {
    const {getByText} = setup();

    fireEvent.press(getByText('Admin'));
    expect(onSelectMock).toHaveBeenCalledWith('ADMIN');

    fireEvent.press(getByText('Manager'));
    expect(onSelectMock).toHaveBeenCalledWith('MANGER');
  });

  it('shows selected styles when a user type is selected', () => {
    const {getAllByTestId} = setup('ADMIN');

    const selectedDots = getAllByTestId(testIdSelectSlot);
    expect(selectedDots.length).toBe(1);
  });
});
