// Contexts/CoresContext.js

import React, { createContext, useContext, useState } from 'react';

const CoresContext = createContext();

const temas = {
  classico: {
    fundo: 'black',
    ativo: '#ffdb73',
    inativo: 'gray',
    texto: '#ffffff',
  },
  neon: {
    fundo: '#001f3f',
    ativo: '#00d9ff',
    inativo: '#3399cc',
    texto: '#ffffff',
  },
  claroRoxo: {
    fundo: '#e0f7ff',
    ativo: '#7b2cbf',
    inativo: '#b8b8b8',
    texto: '#000000',
  },
};

const modos = ['classico', 'neon', 'claroRoxo'];

export function CoresProvider({ children }) {
  const [modoIndex, setModoIndex] = useState(0);

  const setTemaDireto = (modoSelecionado) => {
    const index = modos.indexOf(modoSelecionado);
    if (index !== -1) setModoIndex(index);
  };

  const modo = modos[modoIndex];
  const tema = temas[modo];

  return (
    <CoresContext.Provider value={{ tema, modo, setTemaDireto }}>
      {children}
    </CoresContext.Provider>
  );
}

export function useCores() {
  return useContext(CoresContext);
}
