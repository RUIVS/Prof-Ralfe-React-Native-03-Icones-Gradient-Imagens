import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import estiloLogin from './estiloLogin';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    
    return (
        <View style={estiloLogin.container}>

        <ImageBackground source={require('../../../assets/imagens/twisted_fate.jpg')} style={estiloLogin.fundo}>

                <View style={estiloLogin.logoContainer}>
                     <LinearGradient colors={['#1C1C1C', '#BEBEBE', '#1C1C1C']} style={estiloLogin.logo}>
                        <MaterialCommunityIcons name="cards-playing-outline" size={50} color="white" />
                     </LinearGradient>
                </View>

                <View style={estiloLogin.campoContainer}>
                    <MaterialIcons name="person" size={24} color="white" />
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Login"
                    onChangeText={login => setLogin(login)}
                    value={login}
                />
                </View>

                <View style={estiloLogin.campoContainer}>
                    <MaterialIcons name="vpn-key" size={24} color="white" />
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Senha"
                    onChangeText={senha => setSenha(senha)}
                    value={senha}
                />
                </View>

                <TouchableOpacity onPress={entrar}>
                    <LinearGradient colors={['#1C1C1C', '#BEBEBE', '#1C1C1C']} style={estiloLogin.botaoLinearGradient}>
                        <MaterialIcons name="send" size={24} color="white" />
                        <Text style={estiloLogin.botaoTexto}> Entrar </Text>
                    </LinearGradient>
                </TouchableOpacity>
                </ImageBackground>
            </View>
    )
}

export default Login;
