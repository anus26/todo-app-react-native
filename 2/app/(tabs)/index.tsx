import { View,  Button, } from 'react-native'
import React, { useState } from 'react'
import {SafeAreaView,  TextInput} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {Alert, Modal, StyleSheet, Text, Pressable} from 'react-native';

const todo = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [todo , setTodo]=useState<string[]>(['hello world'])
  const [input, setInput]=useState('')
  const [index,setIndex]=useState(0)
  const [updatetodo,setUpdateTodo]=useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const addTodo=()=>{
    console.log(input);
    todo.push(input);
    setTodo([...todo])
    setInput('')
  }
  const deleteTodo=(index:number)=>{
    todo.splice(index,1)
    setTodo([...todo])
    
  }
  const editTodo=(index:number)=>{
    todo.splice(index,1,updatetodo)
    setTodo([...todo])
  }

  return (
    <SafeAreaView>
      <Text>Todo App </Text>
    <TextInput
      style={styles.input}
      onChangeText={setInput}
      value={input}
      placeholder='enter todo'
    />
  
  <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text>Press Here</Text>
      </TouchableOpacity>


  
      {todo.length > 0 ?
        <FlatList
          data={todo}
          renderItem={({ item, index }) => {
            return<View style={styles.item}>
                <Text style={styles.title}>{item}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>deleteTodo(index)}>
                <Text>DeletTodo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>{
                setIndex(index) 

              }}>
                <Text>editTodo</Text>
              </TouchableOpacity>

              </View>
            
          }}
          keyExtractor={(item, index) => index.toString()}
        />:<Text style={{ ...styles.title, color: 'black', margin: 20 }}>No Todo Found...</Text>}
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

              <Text style={styles.modalText}>updata todo</Text>
              <TextInput onChangeText={setUpdateTodo} 
              value={updatetodo}/>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => editTodo(index)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
      
  
  

    
      
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },



});

export default todo


// import { View, Button } from 'react-native';
// import React, { useState } from 'react';
// import { SafeAreaView, TextInput } from 'react-native';
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
// import { Alert, Modal, StyleSheet, Text, Pressable } from 'react-native';

// const Todo = () => {
//   const [todo, setTodo] = useState<string[]>(['hello world']);
//   const [input, setInput] = useState('');
//   const [index, setIndex] = useState(0);
//   const [updateTodo, setUpdateTodo] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);

//   const addTodo = () => {
//     if (input.trim() === '') return; // Prevent adding empty todos
//     setTodo([...todo, input]);
//     setInput('');
//   };

//   const deleteTodo = (index: number) => {
//     const newTodos = [...todo];
//     newTodos.splice(index, 1);
//     setTodo(newTodos);
//   };

//   const editTodo = () => {
//     if (updateTodo.trim() !== '') {
//       const updatedTodos = [...todo];
//       updatedTodos[index] = updateTodo;
//       setTodo(updatedTodos);
//       setModalVisible(false);
//       setUpdateTodo('');
//     }
//   };

//   const startEditing = (index: number) => {
//     setIndex(index);
//     setUpdateTodo(todo[index]);
//     setModalVisible(true);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.header}>Todo App</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={setInput}
//         value={input}
//         placeholder="Enter todo"
//       />
//       <TouchableOpacity style={styles.addButton} onPress={addTodo}>
//         <Text style={styles.buttonText}>Add Todo</Text>
//       </TouchableOpacity>

//       {todo.length > 0 && (
//         <FlatList
//           data={todo}
//           renderItem={({ item, index }) => (
//             <View style={styles.item}>
//               <Text style={styles.title}>{item}</Text>
//               <TouchableOpacity
//                 style={[styles.button, styles.deleteButton]}
//                 onPress={() => deleteTodo(index)}
//               >
//                 <Text style={styles.buttonText}>Delete</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.button, styles.editButton]}
//                 onPress={() => startEditing(index)}
//               >
//                 <Text style={styles.buttonText}>Edit</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       )}

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <TextInput
//               style={styles.input}
//               onChangeText={setUpdateTodo}
//               value={updateTodo}
//               placeholder="Update todo"
//             />
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={editTodo}
//             >
//               <Text style={styles.textStyle}>Update Todo</Text>
//             </Pressable>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.textStyle}>Cancel</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   addButton: {
//     backgroundColor: '#6200EE',
//     padding: 10,
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     margin: 5,
//   },
//   deleteButton: {
//     backgroundColor: '#FF6347',
//   },
//   editButton: {
//     backgroundColor: '#4682B4',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//   },
//   title: {
//     fontSize: 18,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default Todo;
