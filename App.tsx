import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task , setTask]= useState();
  const [taskItems, setTaskItems]= useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }
  return (
    <SafeAreaView style={styles.container}>

      {/* today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
      </View>

      <View style={styles.items}>
        {
          taskItems.map((item, index)=>
          <Task key={index} text={item}/>)
        }
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abd6d4',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    // backgroundColor: 'red'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'

  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: '#fff',
    // borderColor: '#C0C0C0',
    borderColor:'black',
    width: 250,
    borderRadius:60,
    borderWidth:1,
  },
  addWrapper: {
    width:60,
    height:60,
    backgroundColor: '#fff',
    // borderColor: '#C0C0C0',
    borderColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:60,
    borderWidth:1,
  },
  addText: {

  }
});
