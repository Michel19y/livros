import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { estilo } from '../Estilos/Detalhes';
import { useNavigation } from '@react-navigation/native';

export default function Detalhes({ route }) {
  const { livro } = route.params;
  const info = livro.volumeInfo;
  const navigation = useNavigation();

  const abrirPreview = () => {
    if (info.previewLink) {
      Linking.openURL(info.previewLink);
    }
  };

  return (
    <ScrollView contentContainerStyle={estilo.container}>
     
      <Text style={estilo.titulo}>{info.title}</Text>
      <Text> 
      {info.imageLinks?.thumbnail && (
        <Image source={{ uri: info.imageLinks.thumbnail }} style={estilo.capa} />
      )}   </Text>

      {info.authors && (
        <Text style={estilo.autor}>
          Autor{info.authors.length > 1 ? 'es' : ''}: {info.authors.join(', ')}
        </Text>
      )}

      {info.publishedDate && (
        <Text style={estilo.info}>📅 Publicado em: {info.publishedDate}</Text>
      )}

      {info.pageCount && (
        <Text style={estilo.info}>📖 {info.pageCount} páginas</Text>
      )}

      {info.categories && (
        <Text style={estilo.info}>📚 Categoria: {info.categories.join(', ')}</Text>
      )}

      {info.averageRating && (
        <Text style={estilo.info}>⭐ Avaliação: {info.averageRating}/5</Text>
      )}

      <Text style={estilo.texto}>
        {info.description ? info.description : 'Sem descrição disponível.'}
      </Text>

      {info.previewLink && (
        <TouchableOpacity style={estilo.botaoSecundario} onPress={abrirPreview}>
          <Text style={estilo.botaoTexto}>Ver trecho gratuito</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={estilo.botao} onPress={() => navigation.goBack()}>
        <Text style={estilo.botaoTexto}>Voltar</Text>

      </TouchableOpacity>
   
    </ScrollView>
  );
}
