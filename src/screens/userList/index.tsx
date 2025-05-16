import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View, FlatList, ActivityIndicator, TextInput, RefreshControl} from 'react-native';
import {useQuery} from '@apollo/client';

import UserCard from 'components/UserCard';
import UserTypeFilter from 'components/UserTypeFilter';
import Typography, {typographyType} from 'components/Typography';
import {strings} from 'locales/i18n';
import injectStyled from 'theme/injectStyled';
import {TColors} from 'theme/types';
import {LIST_CUSTOMERS} from 'graphql/constant';
import {ListCustomersData, ListCustomersVars, UserType} from 'types/userType';
import {errorReporting} from 'utils/reportError';
import {activityIndicator, flatList, setTestIdentifier} from 'utils/testIds';

import Styles from './styles';

type UserListScreen = {
  style?: ReturnType<typeof Styles>;
  colors?: TColors;
};

const UserListScreen: React.FC<UserListScreen> = ({style, colors}) => {
  const [selectedType, setSelectedType] = useState<'ADMIN' | 'MANGER'>('ADMIN');
  const [searchText, setSearchText] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const {data, loading, error, refetch} = useQuery<ListCustomersData, ListCustomersVars>(
    LIST_CUSTOMERS,
    {
      variables: {filter: {role: {eq: selectedType}}},
      fetchPolicy: 'network-only',
    },
  );

  useEffect(() => {
    if (refetch) {
      refetch({filter: {role: {eq: selectedType}}}).catch(errorReporting);
    }
  }, [selectedType, refetch]);

  const users: UserType[] = useMemo(() => {
    return (
      data?.listZellerCustomers?.items?.filter(user =>
        user.name?.toLowerCase().includes(searchText.toLowerCase()),
      ) ?? []
    );
  }, [data?.listZellerCustomers?.items, searchText]);

  const handleOnRefresh = useCallback(() => {
    setRefreshing(true);
    refetch({filter: {role: {eq: selectedType}}})
      .catch(errorReporting)
      .finally(() => {
        setRefreshing(false);
      });
  }, [refetch, selectedType]);

  const renderItem = useCallback(({item}: {item: UserType}) => <UserCard user={item} />, []);

  const itemSeparator = useCallback(
    () => <View style={style?.itemSeparatorView} />,
    [style?.itemSeparatorView],
  );

  return (
    <View style={style?.container}>
      <Typography variant={typographyType.title}>{strings('common.userType')}</Typography>
      <UserTypeFilter selected={selectedType} onSelect={setSelectedType} />

      <Typography variant={typographyType.subtitle}>{`${selectedType} ${strings(
        'common.users',
      )}`}</Typography>

      <TextInput
        placeholder={strings('common.searchByName')}
        value={searchText}
        onChangeText={setSearchText}
        style={style?.inputField}
      />

      {loading && (
        <ActivityIndicator
          {...setTestIdentifier(activityIndicator)}
          size="large"
          color={colors?.PrimaryColor}
        />
      )}

      {error && <Typography variant={typographyType.error}>{strings('common.error')}</Typography>}
      {!loading && users?.length === 0 && (
        <Typography variant={typographyType.subText}>{strings('common.noUsersFound')}</Typography>
      )}

      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
        {...setTestIdentifier(flatList)}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />}
      />
    </View>
  );
};

export default injectStyled(Styles)(UserListScreen);
