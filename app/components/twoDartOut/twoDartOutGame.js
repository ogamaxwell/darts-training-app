/**
 * Created by Max on 2/17/2018.
 */

import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity} from 'react-native';
import {StackNavigator, withNavigation} from "react-navigation";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import UpdateCheckoutNumber from '../../containers/twoDartOut/checkoutNumber';

import CurrentCheckout from '../../containers/currentCheckout';
import TripleDoubleSingle from '../../containers/tripleDoubleSingle';
import NumberSelection from '../../containers/numberSelection';
import TurnsLeft from '../../containers/turnsLeft';
import {Container, Content, Icon} from 'native-base';

import {Ionicons} from '@expo/vector-icons';


class TwoDartOutGameScreen extends React.Component {

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
            )
        }
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
    holder: {
        paddingTop: 10,
        flex:1,
        alignItems: 'center',
        alignContent:"center",
        justifyContent:'center',
        backgroundColor: '#000000'
    },
    dartBoard:{
      flex: 1,
    },

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

export default withNavigation(TwoDartOutGameScreen);

