import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    marginTop:7,
    padding: 20,
  },
  input: {
    backgroundColor: '#222', // tom mais claro que o fundo
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#444',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 3,
  },
  capa: {
    width: 60,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 6,
    marginRight: 12,
  },
  texto: {
    color: '#ccc',
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
  },
  botoesContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10, // para RN 0.71+
  },
  botao: {
    flex: 1,
    backgroundColor: '#222',
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffdb73', // dourado suave
    alignItems: 'center',
    marginHorizontal: 5,
  },
  botaoTexto: {
    color: '#ffdb73',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

});
