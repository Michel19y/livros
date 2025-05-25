import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { estilo } from '../Estilos/Detalhes';
import { useNavigation } from '@react-navigation/native';
import { useCores } from '../Contexts/CoresContext';

export default function Detalhes({ route }) {
  const { livro } = route.params || {};
  const info = livro?.volumeInfo || {};
  const navigation = useNavigation();
  const { tema } = useCores();

  const abrirPreview = () => {
    if (info.previewLink) {
      Linking.openURL(info.previewLink);
    }
  };

  if (!livro) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: tema.fundo }}>
        <Text style={{ color: tema.ativo, fontSize: 16 }}>Livro não encontrado.</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
          <Text style={{ color: tema.ativo }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={[estilo.container, { backgroundColor: tema.fundo }]}>
      <Text style={[estilo.titulo, { color: tema.ativo }]}>
        {info.title || 'Título indisponível'}
      </Text>

      <Image
        source={
          info.imageLinks?.thumbnail
            ? { uri: info.imageLinks.thumbnail }
            : require('../assets/img/NotFound.jpeg')
        }
        style={estilo.capa}
      />

      {Array.isArray(info.authors) && info.authors.length > 0 && (
        <Text style={[estilo.autor, { color: tema.ativo }]}>
          {`Autor${info.authors.length > 1 ? 'es' : ''}: ${info.authors.join(', ')}`}
        </Text>
      )}

      {info.publishedDate && (
        <Text style={[estilo.info, { color: tema.ativo }]}>
          Publicado em: {info.publishedDate}
        </Text>
      )}

      {typeof info.pageCount === 'number' && info.pageCount > 0 && (
        <Text style={[estilo.info, { color: tema.ativo }]}>
          {info.pageCount} páginas
        </Text>
      )}

      {Array.isArray(info.categories) && info.categories.length > 0 && (
        <Text style={[estilo.info, { color: tema.ativo }]}>
          Categoria: {info.categories.join(', ')}
        </Text>
      )}

      {typeof info.averageRating === 'number' && (
        <Text style={[estilo.info, { color: tema.ativo }]}>
          Avaliação: {info.averageRating}/5
        </Text>
      )}

      <Text style={[estilo.texto, { color: tema.ativo }]}>
        {typeof info.description === 'string' && info.description.trim().length > 0
          ? info.description
          : 'Sem descrição disponível.'}
      </Text>

      {info.previewLink && (
        <TouchableOpacity
          style={[estilo.botaoSecundario, { borderColor: tema.ativo }]}
          onPress={abrirPreview}
        >
          <Text style={[estilo.botaoTexto, { color: tema.ativo }]}>Ver trecho gratuito</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={[
          estilo.botao,
          { borderColor: tema.ativo, backgroundColor: tema.fundo === '#ffffff' ? '#222' : '#222' }
        ]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[estilo.botaoTexto, { color: tema.ativo }]}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
