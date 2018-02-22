/**
 * Created by Max on 1/28/2018.
 */

import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground, Image} from 'react-native';
import PlayAgainButton from '../containers/postGameContainers/playAgainButton';
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
                <View style={styles.container}>
                    <ImageBackground style={[styles.image]} source={require("../assets/bg_board.png")}>
                        <Image style={styles.logo} source ={require('../assets/logo_sm.png')}/>
                        <PostCheckoutNumber/>
                        <PlayAgainButton/>
                    </ImageBackground>
                </View>
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
        width: 350,
        height: 350,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2:{
        backgroundColor:'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        height: 75,
        width: 150,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
