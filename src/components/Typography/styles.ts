import {StyleSheet} from 'react-native';
import {ThemeTypes} from 'theme/types';

const Styles = ({colors: {Error, IconGrey}, scaleMethods: {scale, scaleFont}}: ThemeTypes) =>
  StyleSheet.create({
    title: {fontSize: scaleFont(20), fontWeight: '600', marginBottom: scale(16)},
    subtitle: {fontSize: scaleFont(18), fontWeight: '600', marginVertical: scale(16)},
    error: {color: Error},
    body: {fontSize: scaleFont(16)},
    text: {fontSize: scaleFont(16), fontWeight: '600'},
    subText: {fontSize: scaleFont(14), color: IconGrey},
  });

export default Styles;
