import {  StyleSheet, Text, View } from 'react-native';
import Content from './components/content/index.jsx';
import { styles } from './style.jsx';
import Header from './components/header/index.jsx';
import Footer from './components/footer/index.jsx';


export default function App() {
  return (

    <View style={styles.container}>
      <Header />
      <Content />
      <Footer />
    </View>
  );
}



