/**
 * Created by Max on 3/11/2018.
 */

import React from 'react';
import { ImageBackground, Image, TouchableOpacity, View, StyleSheet} from 'react-native'
import {StackNavigator, withNavigation, NavigationActions} from "react-navigation";

import UpdateCheckoutNumber from '../../containers/threeDartOut/checkoutNumber';
import CurrentCheckout from '../../containers/currentCheckout';
import TurnsLeft from '../../containers/turnsLeft';

import store from '../../store';


class DartsBoard extends React.Component {

    constructor(props){
        super(props);
    };

    postGame = () =>{
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'PostGame'})]
        });
        this.props.navigation.dispatch(resetAction);
    };

    componentWillMount(){

    }

    componentWillReceiveProps(nextProps, nextState){
        console.log('Next Props: ', nextProps);
        console.log('Next State: ', nextState);
        //this.props.currentCheckout < 0 && this.props.turnsLeft > 1 this condition will render to early
        if(nextProps.currentCheckout === 0 && nextProps.turnsLeft === 0){
            const {navigate} = this.props.navigation;
            navigate('PostGame');
            this.props.bust(false);
        }
        else if(nextProps.currentCheckout > 1 && nextProps.turnsLeft === 0){
            this.props.bust(true);
        }
        else if (nextProps.currentCheckout < 1 && (nextProps.turnsLeft === 0 || nextProps.turnsLeft === 1)){
            this.props.bust(true);
        }
        else {
            this.props.bust(false);
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState, nextProps);
        //this.props.currentCheckout < 1 && this.props.turnsLeft > 0 || nextProps.bust === true
        if (nextProps.bustState === true) {
            return true;
        }
        else {
            return false;
        }
        /*return nextProps.currentCheckout > 0 && nextProps.turnsLeft === 0 ||
         nextProps.currentCheckout === 0 && nextProps.turnsLeft === 0
         */
    }

    componentWillUnmount (){
        this.props.bust(false);
    }



    render (){
        if(this.props.bustState === true){
            return (
                <ImageBackground style={[styles.image]} source={require("../../assets/BustScreen.png")}>
                    <Image style={styles.logo} source={require('../../assets/logo_sm.png')}/>
                    <TouchableOpacity onPress={()=>{this.postGame()}} style={styles.btn}>
                        <Image style={styles.button} source={require('../../assets/BtnNext.png')}/>
                    </TouchableOpacity>
                </ImageBackground>
            )
        }
        else {
            return (
                <ImageBackground style={styles.image} source={require("../../assets/bg_board.png")}>
                    <Image style={[styles.logo]} source ={require('../../assets/logo_sm.png')}/>
                    <UpdateCheckoutNumber/>
                    <CurrentCheckout/>
                    <TurnsLeft/>
                </ImageBackground>
            )
        }
    }
}

export default withNavigation(DartsBoard);

const styles = StyleSheet.create({
    bustImage: {
        width: '75%',
        height: null,
        justifyContent:"center",
        alignItems:"center",
        flex: 1
    },
    btn: {
        position: 'absolute',
        bottom: 0,
    },
    button: {
        width: 150,
        height: 60,
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