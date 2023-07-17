// MiContexto.js
import React, { createContext, useReducer } from 'react';

// Paso 1: Definir el estado inicial
const initialState = {
  currentStep: 0,
};

// Paso 2: Definir las acciones que modificarán el estado
const actions = {
  SET_CURRENT_STEP: 'SET_CURRENT_STEP',
};

// Paso 3: Crear el reducer para manejar las acciones y actualizar el estado
const DataReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    default:
      return state;
  }
};

// Paso 4: Crear el contexto
const Datacontext = createContext();

// Paso 5: Crear el proveedor del contexto que utilizará useReducer para manejar el estado
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  return (
    <Datacontext.Provider value={{ state, dispatch }}>
      {children}
    </Datacontext.Provider>
  );
};

export { Datacontext, DataContextProvider, actions };
