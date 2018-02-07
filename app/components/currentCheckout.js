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

    constructor(props){
        super(props);
        this.state = {
        };

    }

    componentDidMount(){
        this.props.updateCurrentCheckout(this.props.currentCheckout);
    }

    render(){
        return (
            <View>
                <Text style = {styles.text}>
                    {this.props.currentCheckout}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 150,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default CurrentCheckout;
