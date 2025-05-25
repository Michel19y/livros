import React, { useEffect, useState } from 'react';
import {Text,FlatList,Image,TouchableOpacity,ScrollView,StatusBar,  View,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from '../Estilos/Home';
import { FontAwesome } from '@expo/vector-icons';

import { useCores } from '../Contexts/CoresContext';

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

const nomesBonitos = {
  classico: 'Preto & Dourado',
  neon: 'Azul Neon',
  claroRoxo: 'Claro & Roxo',
};

const coresCirculos = {
  classico: '#ffdb73',
  neon: '#00d9ff',
  claroRoxo: '#7b2cbf',
};

export default function Home() {

  const { tema, setTemaDireto, modo } = useCores();
  const [livros, setLivros] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Ficção');
  const [mostrarDropdown, setMostrarDropdown] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(
        categoriaSelecionada
      )}`
    )
      .then((res) => res.json())
      .then((data) => setLivros(data.items || []))
      .catch((err) => console.error('Erro ao buscar livros:', err));
  }, [categoriaSelecionada]);

  return (
    <ScrollView style={[estilo.container, { backgroundColor: tema.fundo }]}>
     
      <StatusBar
        barStyle={tema.texto === '#000000' ? 'dark-content' : 'light-content'}
        backgroundColor={tema.ativo}
      />
       

      {/* Seletor de tema */}
      <View style={{  alignItems: 'flex-end' }}>
  <TouchableOpacity
    onPress={() => setMostrarDropdown(!mostrarDropdown)}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: tema.fundo,
      borderWidth: 1,
      marginBottom:10,
      borderColor: tema.ativo,
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 20,
    }}
  >
    <Text style={{ color: tema.ativo, marginRight: 8 }}>
      Tema: {nomesBonitos[modo]}
    </Text>
    <Text style={{ color: tema.ativo }}>
      {mostrarDropdown ? '▲' : '▼'}
    </Text>
  </TouchableOpacity>

  {mostrarDropdown && (
  <View
    style={{
      position: 'absolute',
      top: 46, // altura abaixo do botão
       // distância da direita da tela
      backgroundColor: tema.fundo,
      borderWidth: 1,
      borderColor: tema.ativo,
      borderRadius: 10,
      paddingVertical: 8,
      width: 220,
      zIndex: 10,
      elevation: 10, // para Android
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    }}
  >

      {Object.keys(nomesBonitos).map((modoNome) => (
        <TouchableOpacity
          key={modoNome}
          onPress={() => {
            setMostrarDropdown(false);
            setTemaDireto(modoNome);
          }}
          style={{
            paddingVertical: 10,
            width: '100%',
            alignItems: 'center',
            backgroundColor: modo === modoNome ? tema.ativo : 'transparent',
          }}
        >
          <Text
            style={{
              color: modo === modoNome ? tema.fundo : tema.ativo,
              fontWeight: modo === modoNome ? 'bold' : 'normal',
            }}
          >
            {nomesBonitos[modoNome]}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )}
</View>

      {/* Avatar e título */}
      <View style={{ alignItems: 'center', marginBottom: 19 }}>
        <Image
          source={require('../assets/img/header.jpg')}
          style={{
            width: 90,
            height: 90,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: tema.ativo,
            marginBottom: 10,
          }}
        />
        <Text style={[estilo.titulo, { color: tema.ativo }]}>Livraria Caronte</Text>
      </View>

      {/* Subtítulo */}
      <Text style={[estilo.subtitulo, { color: tema.texto }]}>
        Atravessando mundos através das palavras. Embarque com Caronte rumo a histórias que ecoam além da vida...
      </Text>

      {/* Categorias */}
   <Text style={[estilo.secao, { color: tema.ativo }]}>
  <FontAwesome name="bullseye" size={20} color={tema.ativo} /> Categorias:
</Text>
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
          { borderColor: tema.ativo, backgroundColor: categoriaSelecionada === cat ? tema.ativo : 'transparent' },
        ]}
        onPress={() => setCategoriaSelecionada(cat)}
      >
        <Text
          style={[
            estilo.categoriaTexto,
            {
              color: categoriaSelecionada === cat ? tema.fundo : tema.ativo,
              fontWeight: categoriaSelecionada === cat ? 'bold' : '500',
            },
          ]}
        >
          {cat}
        </Text>
      </TouchableOpacity>
      
        ))}
      </ScrollView>

    <Text style={[estilo.secao, { color: tema.ativo }]}>
  <FontAwesome name="book" size={20} color={tema.ativo} /> Livros em "{categoriaSelecionada}":
</Text>
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
                source={
                  info.imageLinks?.thumbnail
                    ? { uri: info.imageLinks.thumbnail }
                    : require('../assets/img/NotFound.jpeg')
                }
                style={estilo.capa}
              />
              <Text style={[estilo.texto, { color: tema.texto }]} numberOfLines={2}>
                {info.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
}
