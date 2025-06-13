import React, {use, useState} from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import estilos from './Style';
import RenderItem from './Funcionalidades';
const tasks = [

];
export interface Task{
  titulo:string,
  done:boolean,
  date:Date
}

export default function Tareas(){
  const [text, setText]=useState('')
  const [tasks,setTasks]=useState<Task[]>([])
  const addTask=()=>{
    const tmp=[...tasks]
    const newTask={
      titulo:text,
      done:false,
      date:new Date()
    }
    tmp.push(newTask)
    setTasks(tmp)
    setText('')
  }
  const markDone=()=>{}
  const deleteF=()=>{
    
  }
  return(
    <View style={estilos.contenedorApp}>
      <ScrollView>
        <Text style={estilos.textoApp}>Tareas🗒️</Text>
      <View>
        <TextInput placeholder='Escribe' style={estilos.inputApp} value={text} onChangeText={(t:string)=>setText(t)}></TextInput>
        <TouchableOpacity style={estilos.botonApp} onPress={addTask}>
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