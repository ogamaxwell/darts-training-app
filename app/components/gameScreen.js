/**
 * Created by Max on 1/28/2018.
 */


import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {StackNavigator} from "react-navigation";


import UpdateCheckoutNumber from '../containers/checkoutNumber';

import CurrentCheckout from '../containers/currentCheckout';
import TripleDoubleSingle from '../containers/updateMultiplier';
import NumberSelection from '../containers/numberSelection';
import SelectionsMade from '../containers/selectionsMade';


class GameScreen extends React.Component {


    static  navigationOptions = {
        title: 'Game',
        header: null,
    };

    render(){
        return (
            <View style={styles.container}>
                <View  style={styles.container}>
                    <ImageBackground style={[styles.image]} source={require("../assets/bg_board.png")}>
                        <Text>CHECKOUT</Text>
                        <UpdateCheckoutNumber/>

                        <CurrentCheckout/>
                        <SelectionsMade/>

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
    }
});

export default GameScreen;
