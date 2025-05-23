import React, { useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from '../Estilos/Home';

const categoriasDisponiveis = [
  'Ficção',
  'Romance',
  'História',
  'Tecnologia',
  'Poesia',
  'Filosofia',
  'Ciência',
  'Autoajuda',
];

export default function Home() {
  const [livros, setLivros] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Ficção');
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(categoriaSelecionada)}`)
      .then(res => res.json())
      .then(data => setLivros(data.items || []))
      .catch(err => console.error('Erro ao buscar livros:', err));
  }, [categoriaSelecionada]);

  return (
    <ScrollView style={estilo.container}>
     
      <StatusBar></StatusBar>

      {/* Avatar e título */}
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <Image
          source={require('../assets/julia.jpg')}
          style={{
            width: 90,
            height: 90,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: '#ffdb73',
            marginBottom: 10,
          }}
        />
        <Text style={estilo.titulo}>Livraria Caronte</Text>
      </View>

      {/* Subtítulo */}
      <Text style={estilo.subtitulo}>
        Atravessando mundos através das palavras. Embarque com Caronte rumo a histórias que ecoam além da vida...
      </Text>

      {/* Categorias */}
      <Text style={estilo.secao}>🎯 Categorias:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={estilo.categoriasContainer}
      >
        {categoriasDisponiveis.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              estilo.categoriaBotao,
              categoriaSelecionada === cat && estilo.categoriaBotaoSelecionado,
            ]}
            onPress={() => setCategoriaSelecionada(cat)}
          >
            <Text
              style={[
                estilo.categoriaTexto,
                categoriaSelecionada === cat && estilo.categoriaTextoSelecionado,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de livros */}
      <Text style={estilo.secao}>📚 Livros em "{categoriaSelecionada}":</Text>
      <FlatList
        data={livros}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
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
              <Text style={estilo.texto} numberOfLines={2}>
                {info.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

     
    </ScrollView>
  );
}
