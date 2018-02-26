/**
 * Created by Max on 2/17/2018.
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CheckoutNumber extends React.Component {

    componentDidMount(){
        this.props.getCheckoutNumber();
    }

    render(){
        return (
            <Text style={styles.textSize}>{this.props.checkoutNum}</Text>
        );
    }
}

const styles = StyleSheet.create({
    textSize: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    containeR:{
        justifyContent:"center",
        alignItems: 'center',
    }
});

export default CheckoutNumber;
