import { createContext, useState } from 'react';
import { Alert } from 'react-native';
export const CounterContext = createContext();
export const CounterProvider = ({ children }) => {
  const [lista, setLista] = useState([]);

  const addItem = (nome, idade) => {
    if (nome && idade ) {
      const novoItem = {
        id: lista.length > 0 ? lista[lista.length - 1].id + 1 : 1,
        nome,
        idade,
   
      };
      setLista([...lista, novoItem]);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };
  return (
    <CounterContext.Provider value={{ lista, setLista, addItem }}>
      {children}
    </CounterContext.Provider>
  );
};