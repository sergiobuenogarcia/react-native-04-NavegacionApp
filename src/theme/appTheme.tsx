import {StyleSheet} from 'react-native';

export const CustomTheme = {
  colors: {
    secondaryContainer: '#5856D6', // background of active tab on bottom tab navigator
    onSurface: 'white', // active text color of bottom tab navigator
    // onSurfaceVariant: '#adadad', // inactive text color of bottom tab navigator
    elevation: {
      level2: '#5856D6', //background color of bottom tab navigator
    },
  },
};

export const colores = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    paddingTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuBoton: {
    marginVertical: 10,
  },
  menuItem: {
    fontSize: 20,
  },
});
