import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { estilo } from '../Estilos/Detalhes';
import { useNavigation } from '@react-navigation/native';

export default function Detalhes({ route }) {
  const { livro } = route.params || {};
  const info = livro?.volumeInfo || {};
  const navigation = useNavigation();

  const abrirPreview = () => {
    if (info.previewLink) {
      Linking.openURL(info.previewLink);
    }
  };

  if (!livro) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Livro não encontrado.</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
          <Text style={{ color: '#ffdb73' }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={estilo.container}>
      {/* Título do livro */}
      <Text style={estilo.titulo}>{info.title}</Text>

      {/* Exibe a capa do livro */}
      {info.imageLinks?.thumbnail && (
        <Image source={{ uri: info.imageLinks.thumbnail }} style={estilo.capa} />
      )}

      {/* Exibe autores se existirem */}
      {info.authors && (
        <Text style={estilo.autor}>
          {`Autor${info.authors.length > 1 ? 'es' : ''}: ${info.authors.join(', ')}`}
        </Text>
      )}

      {/* Data de publicação */}
      {info.publishedDate && (
        <Text style={estilo.info}>Publicado em: {info.publishedDate}</Text>
      )}

      {/* Contagem de páginas */}
      {info.pageCount && (
        <Text style={estilo.info}>{info.pageCount} páginas</Text>
      )}

      {/* Categorias do livro */}
      {info.categories && (
        <Text style={estilo.info}>Categoria: {info.categories.join(', ')}</Text>
      )}

      {/* Avaliação do livro */}
      {info.averageRating && (
        <Text style={estilo.info}>Avaliação: {info.averageRating}/5</Text>
      )}

      {/* Descrição do livro */}
      <Text style={estilo.texto}>
        {info.description ? info.description : 'Sem descrição disponível.'}
      </Text>

      {/* Link para o trecho do livro */}
      {info.previewLink && (
        <TouchableOpacity style={estilo.botaoSecundario} onPress={abrirPreview}>
          <Text style={estilo.botaoTexto}>Ver trecho gratuito</Text>
        </TouchableOpacity>
      )}

      {/* Botão para voltar */}
      <TouchableOpacity style={estilo.botao} onPress={() => navigation.goBack()}>
        <Text style={estilo.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
