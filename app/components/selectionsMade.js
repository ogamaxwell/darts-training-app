/**
 * Created by Max on 1/31/2018.
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SelectionsMade extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first: 'T5',
            second: 'S18',
            third: 'D10'
        }
    }

    render(){
        return(
            <View>
                <View style={styles.flexBox}>
                    <Text style={styles.textStyle}>{this.state.first}</Text>
                    <Text style={styles.textStyle}>{this.state.second}</Text>
                    <Text style={styles.textStyle}>{this.state.third}</Text>
                </View>
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
    }
});