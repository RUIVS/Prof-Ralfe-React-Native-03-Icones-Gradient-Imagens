import { StyleSheet } from 'react-native';

const estiloColecao = StyleSheet.create({
   header: {
       height: 40,
       backgroundColor: '#708090',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       padding: 5,
   },
   texto: {
       fontSize: 15,
       color: '#C6E2FF',
   },
   container: {    
       flex: 1,
   },
});

  export default estiloColecao;