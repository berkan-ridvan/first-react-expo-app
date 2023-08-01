import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>React Native ilk uygulama</Text>
      </View>
      <View style={styles.content}>
          <Text style={styles.button}>Bana Tıkla</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#cdcdcd',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
  content: {
    flex: 1,
    width: 100,
    height: 40,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: 300,
  },
  button: {
    width: 100,
    height: 40,
    padding: 10,
    textAlign: 'center',
    
  },
});
