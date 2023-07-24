/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen, AlbumScreen, ContactsScreen} from '../screens/Screens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TopTavNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primarySemiTransparent,
        showIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          borderColor: colores.primary,
          borderTopWidth: 0,
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Chat':
              iconName = 'chatbox-ellipses-outline';
              break;
            case 'Contacts':
              iconName = 'people-outline';
              break;
            case 'Album':
              iconName = 'images-outline';
              break;
          }

          return (
            <Text style={{color: color}}>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};

export default TopTavNavigator;
