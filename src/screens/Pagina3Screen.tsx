import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Pagina3ScreenProps extends StackScreenProps<any, any> {}

const Pagina3Screen = ({navigation}: Pagina3ScreenProps) => {
  return (
    <View>
      <Text style={styles.title}>Pagina3Screen</Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />

      <Button title="Ir a Página 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Pagina3Screen;
