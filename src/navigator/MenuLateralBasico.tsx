import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import {SettingsScreen} from '../screens/Screens';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      // screenOptions={{drawerPosition: 'right'}}
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      //   screenOptions={{
      //     headerLeft: () => <Text>Hola cabro!</Text>,
      //   }}
    >
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default MenuLateralBasico;
