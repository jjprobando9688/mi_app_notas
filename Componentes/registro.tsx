import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native';
import estilos from './Style';
export default function Registro(){
   return(
      <ScrollView>
        <ImageBackground source={require('../image/twelight.jpg')} imageStyle={estilos.imagen}>
            <View>
              <View style={estilos.contenedor}>
                <Text style={estilos.texto}>Nombre:</Text>
                <TextInput placeholder='Nombre' style={estilos.input}></TextInput>
              </View>
                <View style={estilos.contenedor}>
                  <Text style={estilos.texto}>Correo:  </Text>
                  <TextInput placeholder='Correo' style={estilos.input} keyboardType='email-address'></TextInput>
                </View>
                <View style={estilos.contenedor}>
                  <Text style={estilos.texto}>     TD     </Text>
                    <Picker style={estilos.input}>
                      <Picker.Item label='Cedula' style={estilos.input}/>
                      <Picker.Item label='Tarjeta Identidad' style={estilos.input}/>
                      <Picker.Item label='Pasaporte' style={estilos.input}/>
                    </Picker>
                </View>
                <View style={estilos.contenedor}>
                  <Text style={estilos.texto}> N° Doc  </Text>
                  <TextInput placeholder='Documento' style={estilos.input} keyboardType='numeric'></TextInput>
                </View>
                <View style={estilos.contenedor}>
                  <Text style={estilos.texto}>Telefono</Text>
                  <TextInput placeholder='Telefono' style={estilos.input} keyboardType='phone-pad'></TextInput>
                </View>
                <View style={estilos.contenedor}>
                  <Text style={estilos.texto}>Usuario: </Text>
                  <TextInput placeholder='Usuario' style={estilos.input}></TextInput>
                </View>
                <View style={estilos.contenedor}>
                  <Text style={estilos.texto}>Clave:    </Text>
                  <TextInput placeholder='Clave' style={estilos.input} secureTextEntry></TextInput>
                </View>
                <TouchableOpacity>
                <Text style={estilos.texto4}>Registrar</Text>
                </TouchableOpacity>
            </View>  
      </ImageBackground>
    </ScrollView>
   )
}