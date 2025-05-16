import React from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
const estilos = StyleSheet.create({
  contenedor:{
    width:'100%',
    padding:20,
    backgroundColor:'orange',
    height:'50%',
    rowGap:70,
  },
  imagen:{
    width:'100%',
    height:'50%',
    borderRadius:100,
    marginBottom: 0
  },
  texto:{
    fontSize:50,
    color:'yellow',
    backgroundColor:'black',
    textAlign:'center',
    borderRadius:30,
    shadowColor: 'red',
  },
  texto2:{
    fontSize:40,
    color:'blue',
    backgroundColor:'grey',
    textAlign:'center',
    borderRadius:30
  },
  texto3:{
    fontSize:40,
    color:'red',
    backgroundColor:'black',
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
    marginTop: 0
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
    padding: 10
  }
})
export default function App(){
  return(
    <View style={estilos.contenedor}>
      <Text style={estilos.texto}>¡Hola!👋</Text>
      <Text style={estilos.texto2}>Buenos días ☀️</Text>
      <Text style={estilos.texto3}>¿Cómo estás? 😊</Text>
      <Image source={require('./image/twelight.jpg')} style={estilos.imagen}></Image>
      <View>
        <TextInput placeholder='Escribe' style={estilos.input}></TextInput>
        <TouchableOpacity style={estilos.boton}>
          <Text style={estilos.texto4}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}