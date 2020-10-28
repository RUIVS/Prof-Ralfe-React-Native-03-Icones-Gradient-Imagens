import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import Colecao from '../../views/Colecao/Colecao';
import RotasDrawer from '../rotasDrawer/RotasDrawer';
import { MaterialIcons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
  return (
      
    <Tab.Navigator 
         
      tabBarOptions={
      {
         
        style: {backgroundColor: '#4A708B', borderTopColor:'#4A708B'},
        activeTintColor: '#FFFFFF',
        showLabel: false,

      }
      }
    >

      <Tab.Screen
      name="Inicial"
      component={RotasDrawer}
      options={{
          unmountOnBlur: true,
          tabBarLabel: 'Inicial',
          tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={24} color={ color } />
          )
      }}
          />
      <Tab.Screen
      name="Colecao"
      component={Colecao}
      options={{
          tabBarLabel: 'Coleção',
          tabBarIcon: ({ color }) => (
              <MaterialIcons name="storage" size={24} color={ color } />
          )
      }}
          />
      <Tab.Screen
      name="Perfil"
      component={Perfil}
      options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" size={24} color={ color } />
          )
      }}
          />
    </Tab.Navigator>
  );
}

export default RotasTab;