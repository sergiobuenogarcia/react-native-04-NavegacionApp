import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {colores, styles} from '../theme/appTheme';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  });

  const {top} = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, marginTop: top + 10}}>
      <Text style={styles.title}> Iconos </Text>

      <Text>
        <Icon name="airplane-outline" size={80} color={colores.primary} />
        <Icon name="accessibility-outline" size={80} color={colores.primary} />
        <Icon name="car-sport-outline" size={80} color={colores.primary} />
        <Icon name="cash-outline" size={80} color={colores.primary} />
        <Icon name="cut-outline" size={80} color={colores.primary} />
        <Icon name="desktop-outline" size={80} color={colores.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
