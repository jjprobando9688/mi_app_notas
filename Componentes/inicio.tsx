import React from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native';
import estilos from './Style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootList } from './App';

type InicioScreen = StackNavigationProp<RootList, 'Inicio'>
type Props = {
  navigation: InicioScreen
}
export default function Inicio({navigation}:Props){
  const handleIniciar=()=>{
    navigation.navigate('Tareas');
  }
  const handleRegistro=()=>{
    navigation.navigate('Registro')
  }
   return(
    <ScrollView>
      <ImageBackground source={require('../image/twelight.jpg')} imageStyle={estilos.imagenini} width={100} height={500}>
        <View>
          <Text style={estilos.textoini}>Usuario</Text>
          <TextInput placeholder='Usuario' style={estilos.inputini}></TextInput>
          <Text style={estilos.textoini}>Password</Text>
          <TextInput placeholder='Password' style={estilos.inputini}></TextInput>
            <TouchableOpacity style={estilos.textoini} onPress={handleIniciar}>
              <Text style={estilos.inputini}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.textoini} onPress={handleRegistro}>
              <Text style={estilos.inputini}>Registrar</Text>
            </TouchableOpacity>
       </View>
      </ImageBackground>
    </ScrollView>
      
   )
  }