import {  StyleSheet, Text, View } from 'react-native';
import Content from './components/content/index.jsx';


export default function App() {
  return (

    <View style={styles.container}>
      <Content />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },


});


export { styles };