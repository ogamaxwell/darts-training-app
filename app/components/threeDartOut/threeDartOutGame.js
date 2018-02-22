/**
 * Created by Max on 2/20/2018.
 */

/**
 * Created by Max on 2/17/2018.
 */

import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {StackNavigator} from "react-navigation";


import UpdateCheckoutNumber from '../../containers/threeDartOut/checkoutNumber';

import CurrentCheckout from '../../containers/currentCheckout';
import TripleDoubleSingle from '../../containers/tripleDoubleSingle';
import NumberSelection from '../../containers/numberSelection';
import TurnsLeft from '../../containers/turnsLeft';


class ThreeDartOutGameScreen extends React.Component {


    static  navigationOptions = {
        title: 'Three Dart Game',
        header: null,
    };

    render(){
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
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    withImage: {
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

export default ThreeDartOutGameScreen;
