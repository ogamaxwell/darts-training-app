/**
 * Created by Max on 2/8/2018.
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';

class checkoutMessage extends React.Component {
    render(){
        if(this.props.currentCheckoutNumber !== 0){
            return(
                <Text style={styles.text}>
                    Ops, Looks like you didn't hit 0
                </Text>
            )
        }
        else {
            return (
                <Text style={styles.text}>
                    Congratulations! You Checked Out!
                </Text>
            )
        }
    }
}

export default checkoutMessage;

const styles = StyleSheet.create({
    text:{
        fontSize: 15,
        color: 'white',
    }
});