/**
 * Created by Max on 1/31/2018.
 */

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class SelectionsMade extends React.Component{
    constructor(props){
        super(props);
    }




    render(){
        return(
            <View style={styles.flexBox}>
                {this.props.selections.map(i => {
                    return(<Text style={styles.textStyle} key={i}>{i}</Text>)
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
   flexBox: {
       flexDirection: 'row'
   },
    textStyle: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        padding: 5
    },
});