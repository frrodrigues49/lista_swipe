import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'

import ListItem from './src/ListItem'

export default function App() {

  const tarefas = [
    {id: '1', tarefa: 'Fazer compras'},
    {id: '2', tarefa: 'Estudar React Native'},
    {id: '3', tarefa: 'Estudar React'},
    {id: '4', tarefa: 'Ir ao banco'},
    {id: '5', tarefa: 'Pagas as contas'},
  ]
  return (
    <View style={StyleSheet.container}>
      <FlatList 
        data={tarefas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem 
            data={item}
            handleLeft={() => alert('Tarefa concluida com sucesso!')}
            handleRight={() => alert('Tarefa foi excluida!')}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  )
}

const Separator = () => 
<View style={{flex: 1, height: 1, backgroundColor: '#ddd'}}></View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
