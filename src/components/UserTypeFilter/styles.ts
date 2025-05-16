import {StyleSheet} from 'react-native';
import {ThemeTypes} from 'theme/types';

const Styles = ({
  colors: {WhiteSmoke, TitanWhite, SkyBlue},
  scaleMethods: {scale, scaleFont},
}: ThemeTypes) =>
  StyleSheet.create({
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: scale(12),
      marginBottom: scale(8),
      backgroundColor: WhiteSmoke,
      borderRadius: scale(8),
    },
    selectedOption: {
      backgroundColor: TitanWhite,
    },
    radioCircle: {
      height: scale(20),
      width: scale(20),
      borderRadius: scale(10),
      borderWidth: 2,
      borderColor: SkyBlue,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: scale(12),
    },
    selectedDot: {
      width: scale(10),
      height: scale(10),
      borderRadius: scale(5),
      backgroundColor: SkyBlue,
    },
    optionText: {
      fontSize: scaleFont(16),
    },
  });

export default Styles;
