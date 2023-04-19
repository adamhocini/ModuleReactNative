import { React, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  {/*"task" et "taskItems" sont tous les définis à l'aide de la méthode "useState" */ }
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  {/*La fonction "completeTask" est appelée lorsque l'utilisateur appuie sur une tâche pour la marquer comme terminée
splice = permet de supprimer. */}
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      {/*today's tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.tasksTitle}>Todo List</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Calendrier')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Calendrier</Text>
            </View>
        </TouchableOpacity>


        <View style={styles.items}>

          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>
      {/* taskes écrit */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Ecrivez une tache'} value={task} onChangeText={text => setTask(text)} />
        {/* La fonction "handleAddTask" est appelée lorsque l'utilisateur appuie sur le bouton "+" */}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    padding: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: '30%',
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
  button: {
    width: 110,
    height: 40,
    backgroundColor: '#fff',
    position: 'absolute',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
