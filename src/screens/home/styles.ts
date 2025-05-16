import {StyleSheet} from 'react-native';
import {ThemeTypes} from 'theme/types';

const Styles = ({colors: {SkyBlue}}: ThemeTypes) =>
  StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    goToUserText: {color: SkyBlue},
  });

export default Styles;
