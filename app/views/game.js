/**
 * Created by Max on 1/28/2018.
 */


import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class Game extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Game Page.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddfd4'
    }
});
