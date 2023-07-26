import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  });

  const {top} = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, marginTop: top + 10}}>
      <Text style={styles.title}> Iconos </Text>

      <Text>
        <TouchableIcon name="airplane-outline" />
        <TouchableIcon name="accessibility-outline" />
        <TouchableIcon name="car-sport-outline" />
        <TouchableIcon name="cash-outline" />
        <TouchableIcon name="cut-outline" />
        <TouchableIcon name="desktop-outline" />
      </Text>
    </View>
  );
};

export default Tab1Screen;
