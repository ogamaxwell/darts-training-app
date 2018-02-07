/**
 * Created by Max on 1/29/2018.
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CheckoutNumber extends React.Component {

    componentDidMount(){
        this.props.getCheckoutNumber();

    }
    render(){
        return (
          <View>
              <Text style={styles.textsize}>CHECKOUT {this.props.checkoutNum}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    textsize: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default CheckoutNumber;