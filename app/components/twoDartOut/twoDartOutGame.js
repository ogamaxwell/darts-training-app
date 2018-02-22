/**
 * Created by Max on 2/17/2018.
 */

import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Button} from 'react-native';
import {StackNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';




import UpdateCheckoutNumber from '../../containers/twoDartOut/checkoutNumber';

import CurrentCheckout from '../../containers/currentCheckout';
import TripleDoubleSingle from '../../containers/tripleDoubleSingle';
import NumberSelection from '../../containers/numberSelection';
import TurnsLeft from '../../containers/turnsLeft';


class TwoDartOutGameScreen extends React.Component {


    static  navigationOptions = {
        header: null
    };



    render(){

        const myIcon = (
            <Icon.Button name="menu" size={30}>

            </Icon.Button>
        );
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <ImageBackground style={[styles.image]} source={require("../../assets/bg_board.png")}>
                        <Image style={styles.logo} source ={require('../../assets/logo_sm.png')}/>
                        <UpdateCheckoutNumber/>
                        <CurrentCheckout/>
                        <TurnsLeft/>
                    </ImageBackground>
                </View>
                <TripleDoubleSingle/>
                <NumberSelection/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
        //#dddfd4
    },
    image: {
        width: 350,
        height: 350,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        height: 75,
        width: 150,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TwoDartOutGameScreen;

