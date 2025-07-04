import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView, ImageBackground, Button, Alert } from 'react-native';
import estilos from './Style';
export default function Registro(){
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [td, setTd] = useState('')
  const [documento, setDocumento] = useState('')
  const [telefono, setTelefono] = useState('')
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')

  const handleSubmit = async()=>{
    if(!nombre || !email || !td || !documento || !telefono || !usuario || !clave){
      Alert.alert('Todoos los cmapos son obligatorios')
    }
    try {
      const res = await fetch('http',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          nombre,
          email,
          td,
          documento,
          telefono,
          usuario,
          clave
        })
      })
      const data = await res.json()
      if(res.ok){
        Alert.alert('Datos enviados')
        setNombre('')
        setEmail('')
        setTd('')
        setDocumento('')
        setTelefono('')
        setUsuario('')
        setClave('')
      }else{
        Alert.alert('Error al registrar',data.message)
      }
    } catch (e) {
      Alert.alert('No se pudo conectar al servidor')
    }
  }

   return(
      <ScrollView>
        <ImageBackground source={require('../image/twelight.jpg')} imageStyle={estilos.imagen}>
            <View>
              <View style={estilos.contenedor}>
                <Text style={estilos.texto}>Nombre:</Text>
                <TextInput placeholder='Nombre' style={estilos.input} value={nombre} onChangeText={setNombre}></TextInput>
              </View>
                <View style={estilos.contenedor}>
                  <Text style={estilos.texto}>Correo:  </Text>
                  <TextInput placeholder='Correo' style={estilos.input} keyboardType='email-address' value={email} onChangeText={setEmail}></TextInput>
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
                  <TextInput placeholder='Documento' style={estilos.input} keyboardType='numeric' value={documento} onChangeText={setDocumento}></TextInput>
                </View>
                <View style={estilos.contenedor}>
                  <Text style={estilos.texto}>Telefono</Text>
                  <TextInput placeholder='Telefono' style={estilos.input} keyboardType='phone-pad'  value={telefono} onChangeText={setTelefono}></TextInput>
                </View>
                <View style={estilos.contenedor}>
                  <Text style={estilos.texto}>Usuario: </Text>
                  <TextInput placeholder='Usuario' style={estilos.input}  value={usuario} onChangeText={setUsuario}></TextInput>
                </View>
                <View style={estilos.contenedor}>
                  <Text style={estilos.texto}>Clave:    </Text>
                  <TextInput placeholder='Clave' style={estilos.input} secureTextEntry  value={clave} onChangeText={setClave}></TextInput>
                </View>
                <Button title='Registrar' onPress={handleSubmit}/>
            </View>  
      </ImageBackground>
    </ScrollView>
   )
}