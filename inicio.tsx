import React from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
const estiloVistaPrincipal = StyleSheet.create({
  vistaprincipal:{
    width:'100%',
    height:'100%',
    position:'absolute',
    display:'flex',
    flex:2
  },
  imagen:{
    display:'flex',
    flexGrow:2,
    position:'relative',
    flex:1
  }
})
export default function App(){
   return(
    <View>
      <Image source={require("./image/twelight.jpg")}>
      </Image>
    </View>
   )
  }