import {  StyleSheet, Text, View } from 'react-native';
import Task from './task/task';


function Content() {

    return (
      <View style={styles.todoWrapper}>
        <Text style={styles.sectionTitle}>Counter</Text>

        <View style={styles.items}>
          
          {/* This is task area */}
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>


        </View>
      </View>
    )
  }
  


  
const styles = StyleSheet.create({

  content: {
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  todoWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  items: {

  },
});



export default Content