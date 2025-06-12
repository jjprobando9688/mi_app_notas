import React from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import estilos from './Style';
import RenderItem from './Funcionalidades';
const tasks = [
  { titulo:"Estudiar",
    done:true,
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
    date:new Date()
  }
];
export interface Task{
  titulo:string,
  done:boolean,
  date:Date
}
export default function Tareas(){
  const markDone=()=>{}
  const deleteF=()=>{}
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
        <FlatList 
        renderItem={({item})=>(
          <RenderItem
          item={item}
          markDone={markDone}
          deleteF={deleteF}
          />
        )}
        data={tasks}
        />
      </View>
      </ScrollView>
    </View>
  ) 
}