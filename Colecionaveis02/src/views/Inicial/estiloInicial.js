import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
    header: {
        height: 40,
        width: '100%',
        backgroundColor: '#708090',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: 10,
    },
    botaoBackground: {
       width: 140,
       height: 100,
       borderRadius: 10,
       overflow: 'hidden',
       justifyContent: 'flex-end',
       alignItems: 'center',
       padding: 10,
       borderWidth: 1,
       borderColor: '#A2B5CD',    
   },
    fundo: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-evenly',
       width: '100%',
       height: '100%',
   },
    container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },
    texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
    botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,
      borderWidth: 2,
      borderColor: '#e8f2e9',
      backgroundColor: '#14417b',
      justifyContent: 'center',
      alignItems: 'center',
   },
    botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
});

  export default estiloInicial;