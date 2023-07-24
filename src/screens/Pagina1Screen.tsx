/* eslint-disable react/no-unstable-nested-components */

import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import {colores, styles} from '../theme/appTheme';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

interface Pagina1ScreenProps extends DrawerScreenProps<any, any> {}

const Pagina1Screen = ({navigation}: Pagina1ScreenProps) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.globalMargin}
          onPress={() => navigation.toggleDrawer()}>
          <Text>
            <Icon name="menu-outline" size={35} color={colores.primary} />
          </Text>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{marginVertical: 20, fontSize: 20, marginLeft: 5}}>
        Navegar con argumentos
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text>
            <Icon name="man-outline" size={35} color={'white'} />
          </Text>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'María',
            })
          }>
          <Text>
            <Icon name="woman-outline" size={35} color={'white'} />
          </Text>
          <Text style={styles.botonGrandeTexto}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1Screen;
