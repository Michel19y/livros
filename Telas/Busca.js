import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import {View,TextInput,FlatList,Image,Text,TouchableOpacity,  Keyboard,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from '../Estilos/Busca';
import { useCores } from '../Contexts/CoresContext';

export default function Busca() {
  const navigation = useNavigation();
  const { tema } = useCores();
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscarLivros = async (termo = 'livros populares') => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(termo)}`
      );
      const data = await res.json();
      setResultados(data.items || []);
    } catch (err) {
      console.error('Erro na busca:', err);
    }
  };

  useEffect(() => {
    buscarLivros();
  }, []);

  const handleBuscar = () => {
    const termo = query.trim();
    if (termo) buscarLivros(termo);
  };

  return (
    <View style={[estilo.container, { backgroundColor: tema.fundo }]}>
     <StatusBar 
  style={tema.fundo === '#ffffff' ? 'dark' : 'light'}
  backgroundColor={tema.ativo}
/>


      <TextInput
        placeholder="Digite o nome do livro..."
        placeholderTextColor={tema.inativo}
        style={[estilo.input, { color: tema.ativo, borderColor: tema.ativo }]}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleBuscar}
      />

      <FlatList
        data={resultados.filter(item => item.volumeInfo && item.volumeInfo.title)}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => {
          const info = item.volumeInfo;
          return (
          <TouchableOpacity
  style={[
    estilo.card,
    {
      backgroundColor: tema?.fundo || '#1a1a1a',
    },
  ]}
  onPress={() => {
    Keyboard.dismiss();
    navigation.navigate('Detalhes', { livro: item });
  }}
>

              <Image
                source={
                  info.imageLinks?.thumbnail
                    ? { uri: info.imageLinks.thumbnail }
                    : require('../assets/img/NotFound.jpeg')
                }
                style={estilo.capa}
              />
              <Text style={[estilo.texto, { color: tema.ativo }]} numberOfLines={2}>
                {info.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
