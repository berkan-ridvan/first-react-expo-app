import React, { useState } from 'react';
import {  StyleSheet, Text, View, TouchableOpacity  } from 'react-native';


const Task = (props) => {


    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };



    return(

        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text>{count}</Text>
            </View>
            <View style={styles.minusPlus}>

                <TouchableOpacity onPress={incrementCount} style={styles.minusPlusButton}>
                    <Text style={styles.minusPlusText}>+</Text>
                </TouchableOpacity>

                <Text style={styles.minusPlusText2}>|</Text>
                
                <TouchableOpacity onPress={decrementCount} style={styles.minusPlusButton}>
                    <Text style={styles.minusPlusText}>-</Text>
                </TouchableOpacity>
            </View>
           
        </View>


    )
}




const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },



    minusPlus: {
        padding: 5,
        backgroundColor: '#ff5c00',
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'space-between',
        justifyContent: 'center',
    },
    minusPlusButton: {
        padding: 5,
    },

    minusPlusText: {
        color: '#111',
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
    },
    minusPlusText2: {
        color: '#111',
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 3,
    },
  
  });

export default Task;