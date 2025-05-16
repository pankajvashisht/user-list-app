import {createNavigationContainerRef} from '@react-navigation/native';

import {HomeStackParamList} from './types';

export const navigationRef = createNavigationContainerRef<HomeStackParamList>();

export const isReady = (callback = () => {}) => {
  if (navigationRef.isReady()) {
    return callback();
  }
};

export const navigate = (name: string, params?: object) =>
  isReady(() => navigationRef.navigate(name, params));
