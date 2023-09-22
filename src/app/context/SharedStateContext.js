"use client"
import React, { createContext, useContext, useState } from 'react';

const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState('Initial Value');

  const updateSharedData = (newValue) => {
    setSharedData(newValue);
  };

  return (
    <SharedStateContext.Provider value={{ sharedData, updateSharedData }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => {
  return useContext(SharedStateContext);
};