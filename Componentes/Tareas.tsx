import React, {use, useState, useEffect} from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import estilos from './Style';
import RenderItem from './Funcionalidades';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const storeData = async (value:Task[])=>{
    try {
      await AsyncStorage.setItem('Todo',JSON.stringify(value))
    } 
    catch (error) {
      
    }
  }
  const getData = async()=>{
    try {
      const value = await AsyncStorage.getItem('Todo')
      if (value !== null) {
        const Tlocals = JSON.parse(value)
        setTasks(Tlocals)
      }
    } catch (error) {
      
    }
  }
  // useEffect(()=>{
  //   getData()
  // })
  const addTask=()=>{
    const tmp=[...tasks]
    const newTask={
      titulo:text,
      done:false,
      date:new Date()
    }
    tmp.push(newTask)
    setTasks(tmp)
    // storeData(tmp)
    setText('')
  }
  const markDone=(task:Task)=>{
    const tmp = [...tasks]
    const index=tmp.findIndex(tu=>tu.titulo===task.titulo)
    const hola=tmp[index]
    hola.done=!hola.done
    setTasks(tmp)
    // storeData(tmp)
  }

  const deleteF=(task:Task)=>{
    const tmp = [...tasks]
    const index=tmp.findIndex(tu=>tu.titulo===task.titulo)
    tmp.splice(index,1)
    setTasks(tmp)
    // storeData(tmp)
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