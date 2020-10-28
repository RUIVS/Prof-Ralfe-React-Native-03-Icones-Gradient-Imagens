import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';

const Lista = ({data}) => {

    const [item, setItem] = useState(data);

    return (
        <View>
            <LinearGradient colors={['#708090', '#B0C4DE', '#708090']}>
                <Text style={estiloLista.itemTitulo}> {item.titulo} </Text>
                <Text style={estiloLista.itemSubTitulo}> {item.autor} ({item.anoPublicacao})</Text>
                <Image source={item.foto} style={estiloLista.itemFoto} resizeMode='contain'/>
            </LinearGradient>
        </View>
    );
}

export default Lista;