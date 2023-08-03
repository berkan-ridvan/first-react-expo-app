import {  StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 1000,
      backgroundColor: '#cdcdcd',
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexDirection: 'column',
      flexShrink: 0,
      listStyle: 'none',
      position: 'relative',
      textDecorationLine: 'none',
      zIndex: 0,
    },



    header: {
      marginTop: 50,
      padding: 10,
      height: 50,
      textAlign: 'center',
      
    },
    header_text: {
      color: 'red',
      textAlign: 'center',
      
    },




    content: {
      height: 600,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    content_text: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      
    },
    content_button: {
      width: 100,
      height: 40,
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
    },





    footer: {
      height: 100,
      justifyContent: 'flex-end',
      alignItems: 'center',
      
      
    },
    footer_text: {
      height: 40,
      color: 'red',
      textAlign: 'center',
      
    },
  });


export { styles };