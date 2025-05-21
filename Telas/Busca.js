import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  Text,
  StatusBar,
  TouchableOpacity
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
      <StatusBar></StatusBar>
      <TextInput
        placeholder="Digite o nome do livro..."
        placeholderTextColor="#aaa"
        style={estilo.input}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleBuscar}
      />

      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const info = item.volumeInfo;
          return (
            <TouchableOpacity
              style={estilo.card}
              onPress={() => navigation.navigate('Detalhes', { livro: item })}
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

      <View style={estilo.botoesContainer}>
        <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Estige')}>
          <Text style={estilo.botaoTexto}>Voltar ao Estige</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Sobre')}>
          <Text style={estilo.botaoTexto}>Sobre Caronte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}