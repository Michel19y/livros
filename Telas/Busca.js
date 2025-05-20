import React, { useState } from 'react';
import { View,TextInput,FlatList,Image,Text,Button,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from '../Estilos/Busca';

export default function Busca() {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscarLivros = async () => {
    if (!query.trim()) return;
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setResultados(data.items || []);
    } catch (err) {
      console.error('Erro na busca:', err);
    }
  };

  return (
    <View style={estilo.container}>
      <TextInput
        placeholder="Digite o nome do livro..."
        placeholderTextColor="#aaa"
        style={estilo.input}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={buscarLivros}
      />
      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const info = item.volumeInfo;
          return (
            <TouchableOpacity style={estilo.card}>
              <Image
                source={{ uri: info.imageLinks?.thumbnail }}
                style={estilo.capa}
              />
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
