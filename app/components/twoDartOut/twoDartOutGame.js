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

import DartsBoard from '../../containers/twoDartOut/dartsBoard';



class TwoDartOutGameScreen extends React.Component {

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
                <View style={styles.dartBoard}>
                    <TripleDoubleSingle/>
                    <NumberSelection/>
                </View>
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
        flex:1,

    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        flex:1,
    },
    image: {
        width: '75%',
        height: null,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex:1,
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

