import React from 'react';
import { View, Text, Button, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from '../Estilos/Sobre';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Livraria Caronte</Text>

      <Image
        source={require('../assets/caronte.png')} 
        style={{
          width: 180,
          height: 180,
          marginVertical: 20,
          borderRadius: 90,
          borderWidth: 2,
          borderColor: '#ffdb73'}}
        />

      <Text style={estilo.texto}>
        Inspirada no barqueiro Caronte da mitologia grega — aquele que atravessa almas pelos rios do submundo — nossa livraria convida você a atravessar os mundos da imaginação.
      </Text>

      <Text style={[estilo.texto, { marginTop: 10 }]}>
        Aqui, cada livro é uma travessia. Embarque na jornada e descubra histórias que vão te transformar.
      </Text>

 
      <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Busca')}>
  <Text style={estilo.botaoTexto}>Explorar Livros</Text>
</TouchableOpacity>

    </View>
  );
}
