import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const estilo = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: wp('6%'),
    paddingVertical: hp('4%'),
    alignItems: 'center',
    backgroundColor: '#000',
  },
  titulo: {
    fontSize: hp('2.8%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp('3%'),
    color: '#FFD700',
  },
  capa: {
    width: wp('85%'),
    height: hp('30%'),
    resizeMode: 'cover',
    borderRadius: wp('3%'),
    marginBottom: hp('3%'),
  },
  texto: {
    fontSize: hp('2%'),
    lineHeight: hp('3%'),
    textAlign: 'justify',
    color: '#FFD700',
    marginBottom: hp('2.5%'),
  },
  botao: {
    marginTop: hp('4%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('8%'),
    borderRadius: wp('3%'),
    borderWidth: 1,
    borderColor: '#FFD700',
    alignItems: 'center',
    elevation: 5,
  },
  botaoTexto: {
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color: '#FFD700',
    textTransform: 'uppercase',
  },
});
