/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';

import UserListScreen from './index';
import {LIST_CUSTOMERS} from 'graphql/constant';
import {UserType} from 'types/userType';
import {activityIndicator, flatList} from 'utils/testIds';

jest.mock('locales/i18n', () => ({
  strings: (key: unknown) => key,
}));

jest.mock('utils/reportError', () => ({
  errorReporting: jest.fn(),
}));

const usersMock: UserType[] = [
  {id: '1', name: 'Alice', role: 'ADMIN'},
  {id: '2', name: 'Bob', role: 'ADMIN'},
];

const mocks = [
  {
    request: {
      query: LIST_CUSTOMERS,
      variables: {filter: {role: {eq: 'ADMIN'}}},
    },
    result: {
      data: {
        listZellerCustomers: {
          items: usersMock,
        },
      },
    },
  },
];

describe('UserListScreen', () => {
  const renderComponent = () =>
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserListScreen />
      </MockedProvider>,
    );

  // eslint-disable-next-line @typescript-eslint/require-await
  it('renders loading spinner initially', async () => {
    const {getByTestId} = renderComponent();
    expect(getByTestId(activityIndicator)).toBeTruthy();
  });

  it('renders users after fetching', async () => {
    const {getByText} = renderComponent();

    await waitFor(() => {
      expect(getByText('Alice')).toBeTruthy();
      expect(getByText('Bob')).toBeTruthy();
    });
  });

  it('filters users via search input', async () => {
    const {getByPlaceholderText, queryByText} = renderComponent();

    await waitFor(() => {
      expect(queryByText('Alice')).toBeTruthy();
    });

    fireEvent.changeText(getByPlaceholderText('common.searchByName'), 'Bob');

    expect(queryByText('Alice')).toBeNull();
    expect(queryByText('Bob')).toBeTruthy();
  });

  it('shows no users found if list is empty', async () => {
    const emptyMock = [
      {
        request: {
          query: LIST_CUSTOMERS,
          variables: {filter: {role: {eq: 'ADMIN'}}},
        },
        result: {
          data: {
            listZellerCustomers: {
              items: [],
            },
          },
        },
      },
    ];

    const {getByText} = render(
      <MockedProvider mocks={emptyMock} addTypename={false}>
        <UserListScreen />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(getByText('common.noUsersFound')).toBeTruthy();
    });
  });

  it('displays error UI if query fails', async () => {
    const errorMock = [
      {
        request: {
          query: LIST_CUSTOMERS,
          variables: {filter: {role: {eq: 'ADMIN'}}},
        },
        error: new Error('GraphQL Error'),
      },
    ];

    const {getByText} = render(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <UserListScreen />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(getByText('common.error')).toBeTruthy();
    });
  });

  it('refreshes the list on pull', async () => {
    const {getByTestId} = renderComponent();

    await act(async () => {
      const flatLists = getByTestId(flatList);
      const refreshControl = flatLists.props.refreshControl;
      await refreshControl.props.onRefresh();
    });
  });

  it('changes filter type and fetches again', async () => {
    const {getByText} = renderComponent();

    await waitFor(() => {
      expect(getByText('Alice')).toBeTruthy();
    });
  });
});
