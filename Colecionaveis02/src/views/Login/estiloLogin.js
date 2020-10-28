import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create({
    logo: {
        width: 90,
        height: 90,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    fundo: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    campoContainer: {
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 40,
        margin: 10,
        alignItems: 'center',
    },
   logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
   },
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
      backgroundColor: 'transparent',
      paddingLeft: 20,
   },
   campo: {
      backgroundColor: '#transparent',
      fontSize: 16,
      marginLeft: 15,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderColor: 'white',
    },
   botaoLinearGradient: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      marginLeft: 50,
      marginRight: 50,
      borderRadius: 8,
      height: 50,
      paddingLeft: 15,
      paddingRight: 15,
   },
    botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      paddingLeft: 15,
      backgroundColor: 'transparent',
   },
});

  export default estiloLogin;