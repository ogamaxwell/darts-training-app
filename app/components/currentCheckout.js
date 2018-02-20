/**
 * Created by Max on 1/29/2018.
 */

import React from "react";
import {View, Text, StyleSheet} from 'react-native';




/*
* logic here is to grab the checkoutNumber from the checkout Component, we can also have a state that the game cycle
* refers to in order to have everything in on area instead of one compnent. build a state of props for each game cycle.
* */

class CurrentCheckout extends React.Component {
    componentDidMount() {
        this.props.updateCurrentCheckout(this.props.currentCheckout);
    }

    render(){
        return (
            <Text style = {styles.text}>
                {this.props.currentCheckout}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 150,
        color: 'white',
        fontWeight: 'bold',
        margin: 0,
        padding: 0,
    },
    container:{

        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CurrentCheckout;
