import { useState } from "react";
import { View, Text, StyleSheet } from "react-native"
import {TextInput, Button } from 'react-native-paper';

function Camera() {
  const [textInput, setTextInput] = useState('')
  const writeTextFileHandler = () => {
    const textContent = 'some text content'
    
  }
  return (
    <View style={styles.main}>
      <TextInput value={textInput} />
      <Button icon='camera' mode="contained" onPress={writeTextFileHandler} >Paper Button</Button>
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({
  main : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});