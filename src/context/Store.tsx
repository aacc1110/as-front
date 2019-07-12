import React, { createContext, useReducer, useLayoutEffect } from 'react';
import { UserReducer } from './UserReducer';

export const UserContext = createContext('');

interface StoreProps {}

const Store: React.FC<StoreProps> = ({ children }) => {
  const [user, dispatch] = useReducer(UserReducer, '');
  const userData = localStorage.getItem('CURRENT_USER');

  useLayoutEffect(() => {
    dispatch({ type: 'SET_USER', payload: userData });
    console.log('새로운 내용이 렌더링됐네요', user);
  }, [user, userData]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default Store;
