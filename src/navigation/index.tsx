import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, UserList} from 'screens';
import {SCREEN_NAMES} from './constants';
import {navigationRef} from './root';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

const Stack = createNativeStackNavigator();

const noOptions = {
  headerShown: false,
};

const AppNavigation = () => (
  <SafeAreaView style={styles.safeViewContainer}>
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name={SCREEN_NAMES.Home} component={Home} options={noOptions} />
        <Stack.Screen name={SCREEN_NAMES.Users} component={UserList} options={noOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default AppNavigation;
