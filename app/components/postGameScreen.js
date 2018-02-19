/**
 * Created by Max on 1/28/2018.
 */

import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground} from 'react-native';
import PlayAgainButton from '../containers/playAgainButton';
import PostCheckoutNumber from '../containers/postGameContainers/postCheckoutNumber';
import SelectionsMade from '../containers/selectionsMade';
import CheckoutData from '../containers/postGameContainers/checkoutData';

class PostGameScreen extends React.Component {

    static  navigationOptions = {
        title: 'Post Game',
        header: null,
    };

    render(){
        return (
            <View style={styles.container}>
                <ImageBackground style={[styles.image]} source={require("../assets/bg_board.png")}>
                    <Text style={styles.text}>CHECKOUT</Text>
                    <PostCheckoutNumber/>
                    <PlayAgainButton/>
                </ImageBackground>
                <View style={styles.container2}>
                    <CheckoutData/>

                </View>
            </View>
        );
    }
}

export default PostGameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
    image: {
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 20,
        color: "white",
        fontWeight:'bold',
    },
    container2:{
        backgroundColor:'grey',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
