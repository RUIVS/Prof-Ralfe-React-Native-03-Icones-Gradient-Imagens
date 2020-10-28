import { StyleSheet } from 'react-native';

const estiloLista = StyleSheet.create({
    itemTitulo: {
        height: 40,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
    },
    itemSubTitulo: {
        fontSize: 13,
        textAlign: 'center',
    },
    areaItens: {
        flex: 1,
    },
    itemFoto: {
        height: 300,
        marginTop: 20,
        marginBottom: 20,
    },
});

export default estiloLista;