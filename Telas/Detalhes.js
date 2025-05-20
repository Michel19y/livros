import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estilo } from '../Estilos/Detalhes';

export default function Detalhes({ route }) {
  const { livro } = route.params;
  const info = livro.volumeInfo;

  return (
    <ScrollView contentContainerStyle={estilo.container}>
      <Text style={estilo.titulo}>{info.title}</Text>
      {info.imageLinks?.thumbnail && (
        <Image source={{ uri: info.imageLinks.thumbnail }} style={estilo.capa} />
      )}
      <Text style={estilo.texto}>
        {info.description ? info.description : 'Sem descrição disponível.'}
      </Text>
    </ScrollView>
  );
}
