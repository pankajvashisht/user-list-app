import {StyleSheet} from 'react-native';
import {ThemeTypes} from 'theme/types';

const Styles = ({colors: {White, InputColor}, scaleMethods: {scale}}: ThemeTypes) =>
  StyleSheet.create({
    container: {flex: 1, padding: scale(16), backgroundColor: White},
    itemSeparatorView: {
      height: scale(8),
    },
    inputField: {
      marginVertical: scale(12),
      padding: scale(8),
      borderWidth: scale(1),
      borderRadius: scale(8),
      borderColor: InputColor,
    },
  });

export default Styles;
