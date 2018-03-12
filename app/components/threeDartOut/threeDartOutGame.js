/**
 * Created by Max on 2/20/2018.
 */

import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {StackNavigator} from "react-navigation";


import UpdateCheckoutNumber from '../../containers/threeDartOut/checkoutNumber';

import CurrentCheckout from '../../containers/currentCheckout';
import TripleDoubleSingle from '../../containers/tripleDoubleSingle';
import NumberSelection from '../../containers/numberSelection';
import TurnsLeft from '../../containers/turnsLeft';
import DartsBoard from '../../containers/threeDartOut/dartsBoard';

import {Ionicons} from '@expo/vector-icons';


class ThreeDartOutGameScreen extends React.Component {


    static  navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
                backgroundColor: '#000000',
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
                <DartsBoard/>
                <View style={styles.withImage}>
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
        backgroundColor: '#000000'
        //#dddfd4
    },
    image: {
        width: '75%',
        height: null,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex:1,
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
