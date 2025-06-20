import React, {useState, useEffect} from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import estilos from './Style';
import RenderItem from './Funcionalidades';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

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
  const [showDatePicker,setshowDatePicker]=useState(false)
  const [showTimePicker,setshowTimePicker]=useState(false)
  const [selectDate,setselectDate]=useState(new Date)


  const storeData = async (value:Task[])=>{
    try {
      await AsyncStorage.setItem('Todo',JSON.stringify(value))
    } 
    catch (error) {
      console.log('Error storing data: ', error)
    }
  }
  const getData = async()=>{
    try {
      const value = await AsyncStorage.getItem('Todo')
      if (value !== null) {
        const Tlocals = JSON.parse(value)
        const TDate=Tlocals.map((j:any)=>({
          ...j,
          date:new Date(TDate)
        }))
        setTasks(TDate)
      }
    } catch (error) {
      console.log('Error getting data: ', error)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  const addTask=()=>{
    const tmp=[...tasks]
    const newTask={
      titulo:text.trim(),
      done:false,
      date:selectDate
    }
    tmp.push(newTask)
    setTasks(tmp)
    storeData(tmp)
    setText('')
    setselectDate(new Date())
  }
  const markDone=(task:Task)=>{
    const tmp = [...tasks]
    const index=tmp.findIndex(tu=>tu.titulo===task.titulo)
    if(index !== -1){
      tmp[index].done = !tmp[index].done
      setTasks(tmp)
      storeData(tmp)
    }
  }

  const deleteF=(task:Task)=>{
    Alert.alert(
      '¿Desea Eliminar?',
      'Eliminar la tarea',
      [
        {text:'Cancelar',style:'cancel'},
        {text:'Eliminar',style:'destructive',
          onPress:()=>{
            const tmp = [...tasks]
            const index=tmp.findIndex(tu=>tu.titulo===task.titulo)
            if(index !== -1){
              tmp.splice(index,1)
              setTasks(tmp)
              storeData(tmp)
            }
          }
        }
      ]
    )
    
  }

  const onDateChange=(event:any,date?:Date)=>{
    setshowDatePicker(false)
    if(date){
      setselectDate(date)
    }
  }

  const onTimeChange=(event:any,time?:Date)=>{
    setshowTimePicker(false)
    if(time){
      const NDT=new Date(selectDate)
      NDT.setHours(time.getHours())
      NDT.setMinutes(time.getMinutes())
      setselectDate(NDT)
    }
  }

  const formatDateTime=(date:Date)=>{
    return date.toLocaleString('es-Es',{
      year:'numeric',
      month:'short',
      day:'numeric',
      hour:'2-digit',
      minute:'2-digit'
    }

    )
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
        <View style={estilos.DTC}>
          <TouchableOpacity onPress={()=>setshowDatePicker(true)}>
            <Text>Fecha</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setshowTimePicker(true)}>
            <Text>Hora</Text>
          </TouchableOpacity>
        </View>
        <Text>
          Programado para: {formatDateTime(selectDate)}
        </Text>
        <FlatList 
        renderItem={({item})=>(
          <RenderItem
          item={item}
          markDone={markDone}
          deleteF={deleteF}
          />
        )}
        data={tasks}
        keyExtractor={(item, index)=>`${item.titulo}-${index}`}
        />
      </View>
      {showDatePicker &&(
        <DateTimePicker
        value={selectDate}
        mode="date"
        display="default"
        onChange={onDateChange}
        minimumDate={new Date()}
        />
      )}
      {showTimePicker &&(
        <DateTimePicker
        value={selectDate}
        mode="time"
        display='default'
        onChange={onTimeChange}
        is24Hour={true}
        />
      )}
      </ScrollView>
      
    </View>
  ) 
}