/**
 * Created by Max on 3/3/2018.
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const Button = ({onPress, children}) =>{
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
   button: {
       marginTop: 10,
       padding: 20,
       width: '100%',
       backgroundColor: '#00aeef',
       borderRadius: 4,
       alignItems: 'center',
   },
    text: {
       color: 'white',
        fontWeight: '700',
        fontSize: 18,
    }
});

export {Button};