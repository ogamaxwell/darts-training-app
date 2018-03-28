/**
 * Created by Max on 1/29/2018.
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground} from 'react-native';

class TripleDoubleSingle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            uriT: require('../assets/btn_segment_off.png'),
            uriD: require('../assets/btn_segment_off.png'),
            uriS: require('../assets/btn_segment_off.png'),
            disabledT: false,
            disabledD: false,
            disabledS: false,
        };
    }

    onSelect (props, label) {
      this.props.updateMultiplier(props, label);

    };

    toggleSingle () {
        this.props.toggleSingle();
    };
    toggleDouble () {
        this.props.toggleDouble();
    };
    toggleTriple () {
        this.props.toggleTriple();
    };

    changeBackgroundImageT = () => {
        this.setState({
            uriT: require("../assets/btn_segment_on.png"),
            uriD: require("../assets/btn_segment_off.png"),
            uriS: require("../assets/btn_segment_off.png"),
        })
    };
    changeBackgroundImageD = () => {
        this.setState({
            uriD: require("../assets/btn_segment_on.png"),
            uriS: require("../assets/btn_segment_off.png"),
            uriT: require("../assets/btn_segment_off.png"),
        })
    };
    changeBackgroundImageS = () => {
        this.setState({
            uriS: require("../assets/btn_segment_on.png"),
            uriT: require("../assets/btn_segment_off.png"),
            uriD: require("../assets/btn_segment_off.png"),
        })
    };
    reset = () => {
        if(this.props.single === false && this.props.double===false && this.props.triple === false){
            this.setState({
                uriS: require("../assets/btn_segment_off.png"),
                uriT: require("../assets/btn_segment_off.png"),
                uriD: require("../assets/btn_segment_off.png"),
            })
        }

    };

    playSound = () => {
        try {
            const { soundObject, status } =  Expo.Audio.Sound.create(
                require('../assets/sounds/BtnPress.mp3'),
                { shouldPlay: true }
            );
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.single === false && nextProps.double===false && nextProps.triple === false){
            this.setState({
                uriS: require("../assets/btn_segment_off.png"),
                uriT: require("../assets/btn_segment_off.png"),
                uriD: require("../assets/btn_segment_off.png"),
            })
        }
    }

    shouldComponentUpdate(nextProps){
        if(true){
            return true;
        }
        else{
            return false;
        }
    }



    render(){


        return(
            <View style={styles.flexbox}>
                <TouchableOpacity disabled={this.state.disabledT} onPress = {() => {
                    this.onSelect(3,"T");
                    this.changeBackgroundImageT();
                    this.playSound();
                    this.toggleTriple();
                }}>
                    <ImageBackground  style={styles.image} reizeMode='contain' source={this.state.uriT} >
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>Triple</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.disabledD} onPress = {() => {
                    this.onSelect(2,'D');
                    this.changeBackgroundImageD();
                    this.playSound();
                    this.toggleDouble();
                }}>
                    <ImageBackground style = {styles.image} reizeMode='contain' source={this.state.uriD} >
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>Double</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.disabledS} onPress = {() =>{
                    this.onSelect(1,"S");
                    this.changeBackgroundImageS();
                    this.playSound();
                    this.toggleSingle();
                }}>
                    <ImageBackground style = {styles.image} reizeMode='contain' source={this.state.uriS}>
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>Single</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flexbox:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingTop: 5,
    },
    textView: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    textStyle: {
        backgroundColor: 'transparent',
        color: 'white',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    image:{
        width: 132,
        height:45,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TripleDoubleSingle;
