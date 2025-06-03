import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  Animated,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { estilo } from '../Estilos/Busca';
import { useCores } from '../Contexts/CoresContext';

export default function Busca() {
  const navigation = useNavigation();
  const { tema } = useCores();

  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [historico, setHistorico] = useState([]);

  const controllerRef = useRef(null);
  const timeoutRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animarEntrada = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const buscarLivros = async (termo = 'livros populares') => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    setCarregando(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(termo)}`,
        { signal: controller.signal }
      );
      const data = await res.json();
      setResultados(data.items || []);
      animarEntrada();

      // Adiciona ao histórico se não for vazio nem repetido
      if (
        termo !== 'livros populares' &&
        termo.trim() !== '' &&
        !historico.includes(termo.trim())
      ) {
        setHistorico((prev) => [termo.trim(), ...prev.slice(0, 4)]);
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Erro na busca:', err);
      }
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarLivros();
  }, []);

  const handleBuscar = (texto) => {
    setQuery(texto);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const termo = texto.trim();
      if (termo) {
        buscarLivros(termo);
      } else {
        buscarLivros(); // Livros populares
      }
    }, 500);
  };

  return (
    <View style={[estilo.container, { backgroundColor: tema.fundo }]}>
      <StatusBar
        style={tema.fundo === '#ffffff' ? 'dark' : 'light'}
        backgroundColor={tema.ativo}
      />

      {/* Input de busca */}
      <View
        style={[
          estilo.inputContainer,
          { borderColor: tema.ativo, backgroundColor: tema.fundo },
        ]}
      >
        <Ionicons
          name="search"
          size={20}
          color={tema.inativo}
          style={{ marginHorizontal: 8, alignSelf: 'center' }}
        />
        <TextInput
          placeholder="Digite o nome do livro..."
          placeholderTextColor={tema.inativo}
          style={[estilo.input, { color: tema.ativo, flex: 1 }]}
          onChangeText={handleBuscar}
          value={query}
          returnKeyType="search"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>

      {/* Histórico de buscas */}
      {historico.length > 0 && (
  <View style={{ marginHorizontal: 16, marginTop: 8 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ color: tema.inativo, marginBottom: 4, fontSize: 12 }}>
        Buscas recentes:
      </Text>
      <TouchableOpacity onPress={() => setHistorico([])}>
        <Text style={{ color: tema.inativo, fontSize: 12 }}>Apagar tudo</Text>
      </TouchableOpacity>
    </View>

    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {historico.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: tema.inativo + '22',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 12,
            marginRight: 8,
            marginBottom: 6,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setQuery(item);
              buscarLivros(item);
            }}
          >
            <Text style={{ color: tema.ativo, fontSize: 13 }}>{item}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setHistorico((prev) => prev.filter((_, i) => i !== index))
            }
            style={{ marginLeft: 6 }}
          >
            <Ionicons name="close-circle" size={16} color={tema.inativo} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  </View>
)}

      {/* Indicador de carregamento */}
      {carregando && (
        <ActivityIndicator
          size="large"
          color={tema.ativo}
          style={{ marginTop: 20 }}
        />
      )}

      {/* Lista de livros */}
      {!carregando && (
        <Animated.FlatList
          data={resultados.filter((item) => item.volumeInfo?.title)}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="handled"
          style={{ opacity: fadeAnim }}
          renderItem={({ item }) => {
            const info = item.volumeInfo;
            return (
              <TouchableOpacity
                style={[
                  estilo.card,
                  { backgroundColor: tema?.fundo || '#1a1a1a' },
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
                      : require('../assets/img/not.png')
                  }
                  style={estilo.capa}
                />
                <Text
                  style={[estilo.texto, { color: tema.ativo }]}
                  numberOfLines={2}
                >
                  {info.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
}
