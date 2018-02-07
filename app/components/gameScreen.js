/**
 * Created by Max on 1/28/2018.
 */


import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {StackNavigator} from "react-navigation";


import UpdateCheckoutNumber from '../containers/updateCheckout';

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
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View  style={styles.container}>
                    <ImageBackground style={styles.image} source={require("../assets/bg_board.png")}>
                        <UpdateCheckoutNumber/>
                        <CurrentCheckout/>
                        <SelectionsMade/>
                    </ImageBackground>
                </View>
                <View style ={styles.container}>
                    <TripleDoubleSingle/>
                    <NumberSelection/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddfd4'
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
