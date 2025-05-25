// Estilos/Home.js
import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
    paddingHorizontal: 10,
    lineHeight: 22,
  },
  secao: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: '600',
  },
  categoriasContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingVertical: 5,
  },
  categoriaBotao: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 22,
    marginRight: 10,
    borderWidth: 1,
   
  },
  categoriaTexto: {
    fontSize: 14,
    fontWeight: '500',
  },
  categoriaBotaoSelecionado: {
    // Cor será passada dinamicamente
  },
  categoriaTextoSelecionado: {
    fontWeight: 'bold',
  },
  card: {
    marginRight: 16,
    alignItems: 'center',
    width: 130,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
  capa: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  texto: {
    textAlign: 'center',
    fontSize: 13,
    marginTop: 8,
    fontWeight: '500',
  },
  botao: {
    marginTop: 40,
    marginBottom: 60,
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 14,
    borderWidth: 1.5,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
