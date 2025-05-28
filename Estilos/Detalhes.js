import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const estilo = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: wp('5%'),
    alignItems: 'center',
    // backgroundColor set dynamically
  },
  titulo: {
    fontSize: hp('3%'),
    marginTop: hp('2%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp('2.5%'),
    // color dinâmico
  },
  capa: {
    width: wp('48%'),
    height: hp('35%'),
    resizeMode: 'cover',
    borderRadius: wp('2.5%'),
    marginBottom: hp('2.5%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('0.6%') },
    shadowOpacity: 0.7,
    shadowRadius: hp('0.8%'),
    elevation: 8,
  },
  texto: {
    fontSize: hp('1.8%'),
    lineHeight: hp('3.2%'),
    textAlign: 'justify',
    // color dinâmico
  },
  botao: {
    marginTop: hp('4%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('6%'),
    marginBottom: hp('4.5%'),
    borderRadius: wp('3%'),
    borderWidth: 1,
    alignItems: 'center',
    shadowOffset: { width: 0, height: hp('0.4%') },
    shadowOpacity: 0.4,
    shadowRadius: hp('0.6%'),
    elevation: 5,
    // backgroundColor e borderColor dinâmicos
  },
  autor: {
    // color dinâmico
    fontWeight: 'bold',
  },
  botaoSecundario: {
    marginTop: hp('3.5%'),
    borderWidth: wp('1%'),
    borderRadius: wp('3%'),
    paddingVertical: hp('1.3%'),
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
    // borderColor dinâmico
  },
  info: {
    // color dinâmico
    marginTop: hp('0.8%'),
  },
  botaoTexto: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    textTransform: 'uppercase',
    // color dinâmico
  },
});
