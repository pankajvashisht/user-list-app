import type {StackScreenProps} from '@react-navigation/stack';
import {SCREEN_NAMES} from './constants';

export type HomeStackParamList = {
  [SCREEN_NAMES.Home]: undefined;
  [SCREEN_NAMES.Users]: undefined;
};

export type HomeScreenProps = StackScreenProps<HomeStackParamList, 'Home'>;
export type UserScreenProps = StackScreenProps<HomeStackParamList, 'Users'>;
