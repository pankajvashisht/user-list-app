import {StyleSheet} from 'react-native';
import {ThemeTypes} from 'theme/types';

const Styles = ({colors: {WhiteSmoke, Grey, TextColor}, scaleMethods: {scale}}: ThemeTypes) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: WhiteSmoke,
      padding: scale(12),
      borderRadius: scale(8),
    },
    avatar: {
      width: scale(36),
      height: scale(36),
      borderRadius: scale(18),
      backgroundColor: Grey,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: scale(12),
    },
    avatarText: {
      fontWeight: 'bold',
      color: TextColor,
    },
  });

export default Styles;
