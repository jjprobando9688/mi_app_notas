import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native';
const estilos = StyleSheet.create({
  contenedor:{
    flexDirection:'row',
    marginTop: 20
  },
  texto:{
    fontSize:20,
    color:'yellow',
    backgroundColor:'black',
    borderRadius:10,
    alignSelf:'center',
    padding: 10,
    margin: 10
  },
  texto2:{
    fontSize:40,
    color:'blue',
    backgroundColor:'grey',
    textAlign:'center',
    borderRadius:30
  },
  input:{
    fontSize:20,
    backgroundColor:'yellow',
    borderColor: 'black',
    borderBlockColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    textAlign:'center',
    width:'65%',
    height: 60,
    margin: 10
  },
  imagen:{
    opacity: 0.75,
    height: 900
  },
  boton:{
    fontSize: 20,
    textAlignVertical:'center',
    alignContent:'center',
    display:'flex',
    marginTop: 7
  },
  texto4:{
    fontSize:30,
    color:'rgba(0, 0, 0, 0.72)',
    backgroundColor:'rgba(40, 238, 22, 0.57)',
    textAlign:'center',
    borderRadius:20,
    justifyContent:'center',
    textAlignVertical:'center',
    display:'flex',
    alignItems:'center',
    alignSelf: 'center',
    padding: 10,
    margin: 10
  }
})
export default function Registro(){
   return(
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
                      <Picker.Item label='Cedula'/>
                      <Picker.Item label='Tarjeta Identidad'/>
                      <Picker.Item label='Pasaporte'/>
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

   )
}