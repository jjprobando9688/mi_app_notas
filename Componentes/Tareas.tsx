import React from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import estilos from './Style';
const tasks = [
  { titulo:"Estudiar",
    done:false,
    date:new Date()
  },
  { titulo:"Jugar",
    done:false,
    date:new Date()
  },
  { titulo:"Caminar",
    done:false,
    date:new Date()
  },
  {
    titulo:"Comer",
    done:false,
    date:Date()
  }
];
interface Task{
  titulo:string,
  done:boolean,
  date:Date
}
function renderItem({item}:{item:Task}){
  return <Text style={estilos.textoApp5}>{item.titulo}</Text>
}
export default function Tareas(){
  return(
    <View style={estilos.contenedorApp}>
      <ScrollView>
        <Text style={estilos.textoApp}>Tareas🗒️</Text>
      <View>
        <TextInput placeholder='Escribe' style={estilos.inputApp}></TextInput>
        <TouchableOpacity style={estilos.botonApp}>
          <Text style={estilos.textoApp4}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList renderItem={renderItem} data={tasks}/>
      </View>
      </ScrollView>
    </View>
  ) 
}