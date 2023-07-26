import React, {useCallback, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logOut: () => void;
  changeFavIcon: (iconName: string) => void;
  changeUsername: (username: string) => void;
}

export const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const logOut = () => {
    dispatch({type: 'logOut'});
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const changeUsername = useCallback(
    (username: string) => dispatch({type: 'changeUsername', payload: username}),
    [],
  );

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logOut,
        changeFavIcon,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
