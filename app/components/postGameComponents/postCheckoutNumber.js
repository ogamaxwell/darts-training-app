/**
 * Created by Max on 2/7/2018.
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckoutMessage from '../../containers/postGameContainers/checkoutMessage';;

class PostCheckoutNumber extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <CheckoutMessage/>
                <Text style={styles.textCheckout}>
                    {this.props.checkoutNumber}
                </Text>
            </View>
        )
    }
}

export default PostCheckoutNumber;

const styles = StyleSheet.create({
    textCheckout:{
        fontSize: 120,
        color: "white",
        fontWeight: 'bold',
    },
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center',
    },
    text:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
});
