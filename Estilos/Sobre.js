import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    marginTop: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    // color será aplicado dinamicamente
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
    // cor aplicada dinamicamente
  },
  botao: {
    marginTop: 30,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
  
    // cores aplicadas dinamicamente
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    // cor aplicada dinamicamente
  },
  autor: {
    // pode usar cor dinamicamente se necessário
  },
  info: {
    // cor dinâmica se quiser
  },
});
