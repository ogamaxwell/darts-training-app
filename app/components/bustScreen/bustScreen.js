/**
 * Created by Max on 2/19/2018.
 */

import React from 'react';
import {Image, StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native';

import TripleDoubleSingle from '../../containers/tripleDoubleSingle';
import NumberSelection from '../../containers/numberSelection';
import { withNavigation } from 'react-navigation';




class BustScreen extends React.Component {

    static  navigationOptions = {
        title: 'Bust Screen',
        header: null,
    };



    postGame = () =>{
        const {navigate} = this.props.navigation;
        navigate('PostGame');
    };
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container}>
                    <ImageBackground style={[styles.image]} source={require("../../assets/BustScreen.png")}>
                        <View style={styles.logoView}>
                            <Image style={styles.logo} source={require('../../assets/logo_sm.png')}/>
                        </View>
                        <TouchableOpacity onPress={()=>{this.postGame()}} style={styles.btn}>
                            <Image style={styles.button} source={require('../../assets/BtnNext.png')}/>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <TripleDoubleSingle/>
                <NumberSelection/>
            </View>
        )
    }
}

export default withNavigation(BustScreen);

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
        //#dddfd4
    },
    image: {
        width: 400,
        height: 400,
        justifyContent:"center",
        alignItems:"center",
        flexDirection: 'column'
    },
    logoView:{
        bottom: '30%'
    },
    logo:{
      width: 100,
        height: 70,
    },
    btn: {
        top: '30%'
    },
    button: {
        width: 150,
        height: 60,
    }
});