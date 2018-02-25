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



    playSound = () => {

        const Sound = require('react-native-sound');

        Sound.setCategory('Playback');

        let btnPressed = new Sound('app/assets/sounds/BtnPress.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound: ', error);
                return;
            }

            console.log('duration in second: ' + btnPressed.getDuration() + 'number of channels: ' + btnPressed.getNumberOfChannels)
        });

        btnPressed.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
                // reset the player to its uninitialized state (android only)
                // this is the only option to recover after an error occured and use the player again
                btnPressed.reset();
            }
        });
    };



    render(){


        return(
            <View style={styles.flexbox}>
                <TouchableOpacity disabled={this.state.disabledT} onPress = {() => {
                    this.onSelect(3,"T");
                    this.changeBackgroundImageT();
                }}>
                    <ImageBackground  style={styles.image} reizeMode='contain' source={this.state.uriT} >
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>Triple</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.disabledD} onPress = {() => {
                    this.onSelect(2,'D');
                    this.changeBackgroundImageD();}}>
                    <ImageBackground style = {styles.image} reizeMode='contain' source={this.state.uriD} >
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>Double</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.disabledS} onPress = {() =>{
                    this.onSelect(1,"S");
                    this.changeBackgroundImageS();}}>
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
        paddingBottom: 10,
        paddingTop: 10,
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
        flex:1,
        fontSize: 20,
        fontWeight: 'bold',

    },
    image:{
        flexGrow:1,
        width: 132,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TripleDoubleSingle;
