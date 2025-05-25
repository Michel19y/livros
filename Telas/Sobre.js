import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from '../Estilos/Sobre';
import { Video } from 'expo-av';
import { useCores } from '../Contexts/CoresContext';

export default function Sobre() {
  const navigation = useNavigation();
  const { tema } = useCores();

  return (
    <View style={[estilo.container, { backgroundColor: tema.fundo }]}>
      <Text style={[estilo.titulo, { color: tema.ativo }]}>Livraria Caronte</Text>

      <Video
        source={require('../assets/video/sobre.mp4')}
        style={{
          width: 404,
          height: 180,
          marginVertical: 20,
          borderRadius: 12,
          // Talvez queira aplicar uma borda ou sombra usando o tema também
        }}
        resizeMode="cover"
        isLooping
        shouldPlay
        isMuted
      />

      <Text style={[estilo.texto, { color: tema.ativo }]}>
        Inspirada no barqueiro Caronte da mitologia grega — aquele que atravessa almas pelos rios do submundo — nossa livraria convida você a atravessar os mundos da imaginação.
      </Text>

      <Text style={[estilo.texto, { color: tema.ativo, marginTop: 10 }]}>
        Aqui, cada livro é uma travessia. Embarque na jornada e descubra histórias que vão te transformar.
      </Text>

      <TouchableOpacity
        style={[
          estilo.botao,
          { borderColor: tema.ativo, backgroundColor: tema.fundo === '#ffffff' ? '#222' : 'transparent' },
        ]}
        onPress={() => navigation.navigate('Busca')}
      >
        <Text style={[estilo.botaoTexto, { color: tema.ativo }]}>Explorar Livros</Text>
      </TouchableOpacity>
    </View>
  );
}
