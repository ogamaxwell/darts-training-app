/**
 * Created by Max on 2/7/2018.
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


class PostCheckoutNumber extends React.Component {
    render(){
        return(
            <Text style={styles.textCheckout}>{this.props.checkoutNumber}</Text>
        )
    }
}

export default PostCheckoutNumber;

const styles = StyleSheet.create({
    textCheckout: {
        fontSize: 80,
        color: 'white',
        fontWeight: 'bold',
    }
});
