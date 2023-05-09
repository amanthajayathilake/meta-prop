'use client'
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('Initial value');

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
