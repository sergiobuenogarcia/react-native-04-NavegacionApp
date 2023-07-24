import Pagina1Screen from './Pagina1Screen';
import Pagina2Screen from './Pagina2Screen';
import Pagina3Screen from './Pagina3Screen';
import PersonaScreen from './PersonaScreen';
import SettingsScreen from './SettingsScreen';

export {
  Pagina1Screen,
  Pagina2Screen,
  Pagina3Screen,
  PersonaScreen,
  SettingsScreen,
};

export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: {id: number; nombre: string};
};
