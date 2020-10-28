import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao({ navigation, }) {

    const [colecao, setColecao] = useState ( [
        {
        id: '1',
        titulo: 'League Of Legends: Reinos De Runeterra',
        genero: ' Literatura fantástica, Alta fantasia',
        autor: 'Riot',
        anoPublicacao: '2019',
        foto: require('../../../assets/itens/1.jpg'),
        },
        {
        id: '2',
        titulo: 'League Of Legends: Ashe - Mãe De Guerra',
        genero: 'Quadrinhos',
        autor: 'Odin Austin Shafer',
        anoPublicacao: '2018',
        foto: require('../../../assets/itens/2.jpg'),
        },
        {
        id: '3',
        titulo: 'League of Legends: Zed',
        genero: 'Quadrinhos',
        autor: 'Odin Austin Shafer',
        anoPublicacao: '2019',
        foto: require('../../../assets/itens/3.jpg'),
        },
        {
        id: '4',
        titulo: 'League Of Legend: Lux',
        genero: 'Quadrinhos',
        autor: 'John O`bryan',
        anoPublicacao: '2019',
        foto: require('../../../assets/itens/4.jpg'),
        },
    ]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloColecao.container}>

            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>
                <MaterialIcons name="add" size={24} color="white" />
            </View>
            
            <FlatList
                showsHorizontalScrollIndicator={ false }
                keyExtractor={(item) => item.id}
                data={colecao} 
                renderItem={ ({item}) => <Lista data={item} />}
                />
        </View>
    )
}

export default Colecao;
