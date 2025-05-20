import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    color: '#ffdb73',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 25,
    fontStyle: 'italic',
    paddingHorizontal: 10,
  },
  secao: {
    fontSize: 16,
    color: '#ffdb73',
    marginBottom: 10,
  },
  card: {
    marginRight: 15,
    alignItems: 'center',
    width: 110,
    backgroundColor: '#222',
    padding: 8,
    borderRadius: 8,
  },
  capa: {
    width: 90,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  texto: {
    color: '#eee',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 8,
  },
});
