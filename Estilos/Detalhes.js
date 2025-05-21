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
  botao: {
    marginTop: 30,
    backgroundColor: '#222',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffdb73',
    alignItems: 'center',
    shadowColor: '#ffdb73',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },

  autor: {
    color:'#ffdb73'
  },
  botaoSecundario:{
marginTop:26,
borderColor:'white',
borderWidth:1,
borderRadius:30,
},

  info: {
  color:'white',
  },
  botaoTexto: {
    color: '#ffdb73',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

});
