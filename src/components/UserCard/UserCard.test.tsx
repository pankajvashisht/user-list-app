import React from 'react';
import {render} from '@testing-library/react-native';
import UserCard from './index';

jest.mock('hooks/useThemeStyle', () => () => ({
  style: {
    container: {padding: 10},
    avatar: {borderRadius: 20},
    avatarText: {fontSize: 18},
  },
}));

describe('UserCard', () => {
  const mockUser = {
    id: '1',
    name: 'Alice',
    role: 'Developer',
  };

  it('renders user name and role correctly', () => {
    const {getByText} = render(<UserCard user={mockUser} />);
    expect(getByText('Alice')).toBeTruthy();
    expect(getByText('Developer')).toBeTruthy();
  });

  it('renders initial letter of the name', () => {
    const {getByText} = render(<UserCard user={mockUser} />);
    expect(getByText('A')).toBeTruthy(); // First letter of "Alice"
  });

  it('falls back to "?" when name is empty', () => {
    const user = {...mockUser, name: ''};
    const {getByText} = render(<UserCard user={user} />);
    expect(getByText('?')).toBeTruthy();
  });
});
