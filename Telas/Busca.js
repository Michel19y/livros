import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from '../Estilos/Busca';

export default function Busca() {
  const navigation = useNavigation();
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
    buscarLivros(); // busca inicial com 'livros populares'
  }, []);

  const handleBuscar = () => {
    const termo = query.trim();
    if (termo) buscarLivros(termo);
  };

  return (
    <View style={estilo.container}>
      <StatusBar />
      <TextInput
        placeholder="Digite o nome do livro..."
        placeholderTextColor="#aaa"
        style={estilo.input}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleBuscar}
      />

      <FlatList
        data={resultados.filter(item => item.volumeInfo && item.volumeInfo.title)}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled" // 👈 isso resolve o toque com teclado aberto
        renderItem={({ item }) => {
          const info = item.volumeInfo;
          return (
            <TouchableOpacity
              style={estilo.card}
              onPress={() => {
                Keyboard.dismiss(); // 👈 fecha o teclado ao tocar
                navigation.navigate('Detalhes', { livro: item });
              }}
            >
              {info.imageLinks?.thumbnail ? (
                <Image
                  source={{ uri: info.imageLinks.thumbnail }}
                  style={estilo.capa}
                />
              ) : (
                <Text style={estilo.texto}>Sem imagem</Text>
              )}
              <Text style={estilo.texto}>{info.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
