import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    padding: 12,
    borderRadius: 8,
    marginTop: 17,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    // backgroundColor, borderColor e color são controlados no componente
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 3,
    // backgroundColor é controlado no componente
  },
  capa: {
    width: 60,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 6,
    marginRight: 12,
  },
  texto: {
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    // color controlado no componente
  },
  botoesContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10, // RN 0.71+
  },
  botao: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    // cores controladas no componente se necessário
  },
  botaoTexto: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    // cor controlada no componente
  },
});
