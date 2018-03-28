/**
 * Created by Max on 1/28/2018.
 */

import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import PlayAgainButton from '../containers/postGameContainers/playAgainButton';
import PostCheckoutNumber from '../containers/postGameContainers/postCheckoutNumber';
import SelectionsMade from '../containers/selectionsMade';
import CheckoutData from '../containers/postGameContainers/checkoutData';
import CheckoutMessage from '../containers/postGameContainers/checkoutMessage';

import Store from '../store';

import { sendCheckoutData } from '../actions';
import {Ionicons} from '@expo/vector-icons';


class PostGameScreen extends React.Component {

    static  navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: 'white',
            headerRight: (
                <TouchableOpacity onPress={() => {
                    navigation.navigate('PreGame');
                }}>
                    <Ionicons style={{paddingRight: 10}} name="md-menu" color="white" size={32}/>
                </TouchableOpacity>
            ),
            headerLeft: null
        }
    };

    render(){
        let store = Store.getState();
        let checkout = store.getCheckoutNumber;
        let outCombo = store.updateSelectionsMade;
        Store.dispatch(sendCheckoutData(checkout,outCombo));
        return (
            <View style={styles.holder}>
                <ImageBackground style={styles.image} source={require("../assets/bg_board.png")}>
                    <Image style={styles.logo} source ={require('../assets/logo_sm.png')}/>
                    <CheckoutMessage/>
                    <PostCheckoutNumber/>
                    <SelectionsMade/>
                    <PlayAgainButton/>
                </ImageBackground>
                <View style={styles.checkoutData}>
                    <CheckoutData/>
                </View>
            </View>
        );
    }
}

export default PostGameScreen;

const styles = StyleSheet.create({
    numHolder:{
        alignItems:'center'
    },
    holder: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },

    image: {
        width: '80%',
        height: null,
        justifyContent:"flex-start",
        alignItems:'center',
        flex:1,
        backgroundColor: '#000000'
    },
    checkoutData:{
        backgroundColor:'#262525',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        flex: .8,
    },
    logo:{
        height: '30%',
        width: '30%',
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
