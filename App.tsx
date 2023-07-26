import React from 'react';

import 'react-native-gesture-handler';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {CustomTheme} from './src/theme/appTheme';

import {NavigationContainer} from '@react-navigation/native';
// import StackNavigator from './src/navigator/StackNavigator';
// import MenuLateralBasico from './src/navigator/MenuLateralBasico';
import MenuLateral from './src/navigator/MenuLateral';
import {AuthProvider} from './src/context/AuthContext';
// import Tabs from './src/navigator/Tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...CustomTheme.colors,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          {/* <StackNavigator /> */}
          {/* <MenuLateralBasico /> */}
          {/* <Tabs /> */}
          <MenuLateral />
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
