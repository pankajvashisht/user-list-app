import React from 'react';
import {View} from 'react-native';

import Typography, {typographyType} from 'components/Typography';
import useThemeStyle from 'hooks/useThemeStyle';
import Styles from './styles';

type Props = {
  user: {
    id: string;
    name: string;
    role: string;
  };
};

const UserCard = ({user}: Props) => {
  const {style} = useThemeStyle(Styles);

  const initial = user.name[0]?.toUpperCase() || '?';

  return (
    <View style={style.container}>
      <View style={style.avatar}>
        <Typography style={style.avatarText}>{initial}</Typography>
      </View>
      <View>
        <Typography variant={typographyType.text}>{user.name}</Typography>
        <Typography variant={typographyType.subText}>{user.role}</Typography>
      </View>
    </View>
  );
};

export default UserCard;
