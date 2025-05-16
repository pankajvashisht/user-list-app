import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Home from './index';
import {navigate} from 'navigation/root';
import {strings} from 'locales/i18n';

jest.mock('navigation/root', () => ({
  navigate: jest.fn(),
}));

describe('Home Screen', () => {
  const renderComponent = () => render(<Home />);

  it('should render welcome message', () => {
    const {getByText} = renderComponent();
    expect(getByText(strings('common.welcomeToHomeScreen'))).toBeTruthy();
  });

  it('should render navigation button text', () => {
    const {getByText} = renderComponent();
    expect(getByText(strings('common.goToUserList'))).toBeTruthy();
  });

  it('should navigate to Users screen on button press', () => {
    const {getByText} = renderComponent();
    fireEvent.press(getByText(strings('common.goToUserList')));
    expect(navigate).toHaveBeenCalledWith('Users');
  });
});
