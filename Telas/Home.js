import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  View,
  ActivityIndicator,
} from 'react-native';
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

export default function Home() {
  const { tema, setTemaDireto, modo } = useCores();
  const [livros, setLivros] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Ficção');
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const [visiveis, setVisiveis] = useState(new Set());
  const [loading, setLoading] = useState(false); // Estado loading adicionado
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true); // começa carregando
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(
        categoriaSelecionada
      )}`
    )
      .then((res) => res.json())
      .then((data) => setLivros(data.items || []))
      .catch((err) => console.error('Erro ao buscar livros:', err))
      .finally(() => setLoading(false)); // termina carregando
  }, [categoriaSelecionada]);

  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    const idsVisiveis = new Set(viewableItems.map((vi) => vi.item.id));
    setVisiveis(idsVisiveis);
  });

  return (
    <ScrollView style={[estilo.container, { backgroundColor: tema.fundo }]}>
      <StatusBar
        barStyle={tema.texto === '#000000' ? 'dark-content' : 'light-content'}
        backgroundColor={tema.ativo}
      />

      {/* Seletor de tema */}
      <View style={estilo.temaContainer}>
        <TouchableOpacity
          onPress={() => setMostrarDropdown(!mostrarDropdown)}
          style={[
            estilo.temaBotao,
            {
              backgroundColor: tema.fundo,
              borderColor: tema.ativo,
            },
          ]}
        >
          <Text style={[estilo.temaTexto, { color: tema.ativo }]}>
            Tema: {nomesBonitos[modo]}
          </Text>
          <Text style={{ color: tema.ativo }}>{mostrarDropdown ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {mostrarDropdown && (
          <View
            style={[
              estilo.dropdown,
              { backgroundColor: tema.fundo, borderColor: tema.ativo },
            ]}
          >
            {Object.keys(nomesBonitos).map((modoNome) => (
              <TouchableOpacity
                key={modoNome}
                onPress={() => {
                  setMostrarDropdown(false);
                  setTemaDireto(modoNome);
                }}
                style={[
                  estilo.dropdownItem,
                  {
                    backgroundColor: modo === modoNome ? tema.ativo : 'transparent',
                  },
                ]}
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

      <View style={estilo.header}>
        <Image
          source={require('../assets/img/header.jpg')}
          style={[estilo.avatar, { borderColor: tema.ativo }]}
        />
        <Text style={[estilo.titulo, { color: tema.ativo }]}>Livraria Caronte</Text>
      </View>

      <Text style={[estilo.subtitulo, { color: tema.texto }]}>
        Atravessando mundos através das palavras. Embarque com Caronte rumo a histórias que
        ecoam além da vida...
      </Text>

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
              {
                borderColor: tema.ativo,
                backgroundColor: categoriaSelecionada === cat ? tema.ativo : 'transparent',
              },
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

      {/* Mostrar o loading ou a lista */}
      {loading ? (
        <View
          style={{
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size="large" color={tema.ativo} />
          <Text style={{ color: tema.ativo, marginTop: 10 }}>Carregando livros...</Text>
        </View>
      ) : (
        <FlatList
          data={livros}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          onViewableItemsChanged={onViewableItemsChanged.current}
          viewabilityConfig={viewabilityConfig}
          renderItem={({ item }) => {
            const info = item.volumeInfo;
            const thumbnail = info.imageLinks?.thumbnail;
            const isVisible = visiveis.has(item.id);

            return (
              <TouchableOpacity
                style={[estilo.card, { backgroundColor: tema.fundo }]}
                onPress={() => navigation.navigate('Detalhes', { livro: item })}
              >
                <View style={estilo.capaContainer}>
                  {thumbnail ? (
                    <Image source={{ uri: thumbnail }} style={estilo.capa} />
                  ) : isVisible ? (
                    <Image
                      source={require('../assets/img/not.png')}
                      style={estilo.video}
                      resizeMode="cover"
                      isLooping
                      shouldPlay
                      isMuted
                    />
                  ) : (
                    <View style={estilo.semCapa}>
                      <Text style={{ color: tema.ativo, fontSize: 12 }}>Sem capa</Text>
                    </View>
                  )}
                </View>
                <Text style={[estilo.texto, { color: tema.texto }]} numberOfLines={2}>
                  {info.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </ScrollView>
  );
}
