import React from "react";
import { View, TouchableOpacity, Text} from "react-native";
import estilos from "./Style";
import { Task } from "./Tareas";

interface ItemProps{
    item:Task
    markDone: (task:Task) => void
    deleteF: (task:Task) => void
}
export default function RenderItem({item,markDone,deleteF}:ItemProps){
  return (
    <View>
      <TouchableOpacity onPress={()=>markDone(item)}>
        <Text style={item.done ? estilos.textDone:estilos.textoApp5}>{item.titulo}</Text>
          {
        item.done &&
          (
            <TouchableOpacity onPress={()=>deleteF(item)}>
              <Text style={estilos.botonEliminar}>Eliminar</Text>
            </TouchableOpacity>
          )
        }
        <Text style={estilos.textoApp5}>{item.date.toDateString()}</Text>
      </TouchableOpacity>
    </View>
);}