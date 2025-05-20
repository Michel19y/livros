import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from '../Estilos/Home';

export default function Home() {
  const [livros, setLivros] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=bestsellers')
      .then(res => res.json())
      .then(data => setLivros(data.items))
      .catch(err => console.error('Erro ao buscar livros:', err));
  }, []);

  return (
    <ScrollView style={estilo.container}>
      <Text style={estilo.titulo}>⚓ Livraria Caronte</Text>

      <Text style={estilo.subtitulo}>
        Atravessando mundos através das palavras. Embarque com Caronte rumo a histórias que ecoam além da vida...
      </Text>

      <Text style={estilo.secao}>📚 Travessias disponíveis:</Text>

      <FlatList
        data={livros}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const info = item.volumeInfo;
          return (
            <TouchableOpacity
              style={estilo.card}
              onPress={() => navigation.navigate('Detalhes', { livro: item })}
            >
              <Image
                source={{ uri: info.imageLinks?.thumbnail }}
                style={estilo.capa}
              />
              <Text style={estilo.texto}>{info.title}</Text>
            </TouchableOpacity>
          );
        }}
      />

      <View style={{ marginTop: 30 }}>
        <Button
          title="🔎 Explorar mais travessias"
          onPress={() => navigation.navigate('Busca')}
          color="#ffdb73"
        />
      </View>
    </ScrollView>
  );
}
