import React, {memo, useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';

import Typography, {typographyType} from 'components/Typography';
import {userTypes} from 'constants/appConstant';
import ListViewElement from 'components/ListViewElement';
import useThemeStyle from 'hooks/useThemeStyle';

import Styles from './styles';
import {setTestIdentifier, testIdSelectSlot} from 'utils/testIds';

type Props = {
  selected: 'ADMIN' | 'MANGER' | null;
  onSelect: (type: 'ADMIN' | 'MANGER') => void;
};

type userType = {
  name: string;
  value: string;
};

const UserTypeFilter = ({selected, onSelect}: Props) => {
  const {style} = useThemeStyle(Styles);

  const handleRenderItem = useCallback(
    ({name, value}: userType) => {
      return (
        <TouchableOpacity
          key={name}
          onPress={() => onSelect(value as 'ADMIN' | 'MANGER')}
          style={[style.option, selected === value && style.selectedOption]}>
          <View style={style.radioCircle}>
            {selected === value && (
              <View style={style.selectedDot} {...setTestIdentifier(testIdSelectSlot)} />
            )}
          </View>

          <Typography variant={typographyType.body}>{name}</Typography>
        </TouchableOpacity>
      );
    },
    [onSelect, selected, style.option, style.radioCircle, style.selectedDot, style.selectedOption],
  );

  return (
    <View>
      <ListViewElement data={userTypes} renderItem={handleRenderItem} />
    </View>
  );
};

export default memo(UserTypeFilter);
