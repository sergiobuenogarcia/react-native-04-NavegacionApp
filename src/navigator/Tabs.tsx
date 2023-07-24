/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Screens';
import StackNavigator from './StackNavigator';
import {colores} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TopTavNavigator from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      activeColor="white"
      inactiveColor="#adadad"
      // sceneAnimationEnabled={true}
      // barStyle={{backgroundColor: colores.primary}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            case 'Tab2Screen':
              iconName = 'basketball-outline';
              break;
            case 'Tab3Screen':
              iconName = 'bookmarks-outline';
              break;
          }
          return (
            <Text style={{color: color}}>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTavNavigator}
      />
      <BottomTabAndroid.Screen
        name="Tab3Screen"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({route}) => ({
        // tabBarIconStyle: {display: 'none'},
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          // backgroundColor: 'green',
          borderTopColor: colores.primary,
          elevation: 0,
          // borderTopWidth: 3,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            case 'Tab2Screen':
              iconName = 'basketball-outline';
              break;
            case 'Tab3Screen':
              iconName = 'bookmarks-outline';
              break;
          }
          return (
            <Text style={{color: color}}>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTavNavigator}
      />
      <BottomTabIOS.Screen
        name="Tab3Screen"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};

export default Tabs;
