import Pagina1Screen from './Pagina1Screen';
import Pagina2Screen from './Pagina2Screen';
import Pagina3Screen from './Pagina3Screen';
import PersonaScreen from './PersonaScreen';
import SettingsScreen from './SettingsScreen';
import Tab1Screen from './Tab1Screen';
import ChatScreen from './ChatScreen';
import ContactsScreen from './ContactsScreen';
import AlbumScreen from './AlbumScreen';

export {
  Pagina1Screen,
  Pagina2Screen,
  Pagina3Screen,
  PersonaScreen,
  SettingsScreen,
  Tab1Screen,
  ChatScreen,
  ContactsScreen,
  AlbumScreen,
};

export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: {id: number; nombre: string};
};
