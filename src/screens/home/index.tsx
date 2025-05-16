import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import Typography, {typographyType} from 'components/Typography';
import {strings} from 'locales/i18n';
import {navigate} from 'navigation/root';
import {SCREEN_NAMES} from 'navigation/constants';
import injectStyled from 'theme/injectStyled';

import styles from './styles';

type HomeScreen = {
  style?: ReturnType<typeof styles>;
};

const Home: React.FC<HomeScreen> = ({style}) => (
  <View style={style?.container}>
    <Typography variant={typographyType.title}>{strings('common.welcomeToHomeScreen')}</Typography>
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigate(SCREEN_NAMES.Users)}>
      <Typography style={style?.goToUserText} variant={typographyType.title}>
        {strings('common.goToUserList')}
      </Typography>
    </TouchableOpacity>
  </View>
);

export default injectStyled(styles)(Home);
