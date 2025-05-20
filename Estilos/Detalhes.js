import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#111',
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    color: '#ffdb73',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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
    color: '#ccc',
    lineHeight: 22,
    textAlign: 'justify',
  },
});
