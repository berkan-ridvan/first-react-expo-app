import {  StyleSheet, Text, View } from 'react-native';
import { styles } from '../../style';

function Content() {

    return (
      <View style={styles.content}>
        <View style={styles.content_text}>
          <Text>React Native ilk uygulama</Text>
        </View>
        <View style={styles.content_button}>
          <Text onPress={() => console.log('Tıkladın')} style={styles.button}>Bana Tıkla</Text>
        </View>
      </View>
    )
  }
  
  export default Content