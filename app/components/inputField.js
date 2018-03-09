/**
 * Created by Max on 3/3/2018.
 */

import React from 'react';
import { View, StyleSheet, Text, TextInput} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                autoCorrect={false}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                value={value}
            />
        </View>
    )
};

const styles = StyleSheet.create({
   container:{
       width:'100%',
       marginTop: 10,
       borderColor: '#eee',
       borderBottomWidth: 2,
   },
    label: {
       fontSize: 17,
        width: '100%',
        padding: 5,
        paddingBottom: 0,
        color: '#333'
    },
    input: {
      fontSize: 18,
        width: "100%",
        paddingRight :5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#333',
        fontWeight: "700",
    }
});

export {Input};
