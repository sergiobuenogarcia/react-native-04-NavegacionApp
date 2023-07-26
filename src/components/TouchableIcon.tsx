import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colores} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

const TouchableIcon = ({name, size = 80, color = colores.primary}: Props) => {
  const {changeFavIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavIcon(name)}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
