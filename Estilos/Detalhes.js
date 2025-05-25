import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    // backgroundColor set dynamically
  },
  titulo: {
    fontSize: 22,
    marginTop: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    // color dinâmico
  },
  capa: {
    width: 180,
    height: 260,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 8,
  },
  texto: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'justify',
    // color dinâmico
  },
  botao: {
    marginTop: 30,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginBottom: 34,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    // backgroundColor e borderColor dinâmicos
  },
  autor: {
    // color dinâmico
    fontWeight: 'bold',
  },
  botaoSecundario: {
    marginTop: 26,
    borderWidth: 4,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    // borderColor dinâmico
  },
  info: {
    // color dinâmico
    marginTop: 6,
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    // color dinâmico
  },
});
