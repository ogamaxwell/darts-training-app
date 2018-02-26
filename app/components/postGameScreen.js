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
        return (
            <View style={styles.holder}>
                <View style={styles.dartBoard}>
                    <ImageBackground style={[styles.image]} source={require("../assets/bg_board.png")}>
                        <Image style={styles.logo} source ={require('../assets/logo_sm.png')}/>
                        <View style={styles.numHolder}>
                            <CheckoutMessage/>
                            <PostCheckoutNumber/>
                            <SelectionsMade/>
                            <PlayAgainButton/>
                        </View>
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
    numHolder:{
        alignItems:'center'
    },
    holder: {
        flex:1,
        alignItems: 'stretch',
        justifyContent: 'center',
        //backgroundColor: '#000000',
    },

    dartBoard: {
        flexGrow: .25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
    image: {

        width: 350,
        height: 350,
        justifyContent:"center",
        alignItems:'center',
    },
    container2:{
        backgroundColor:'#262525',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    logo:{
        height: 75,
        width: 150,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
