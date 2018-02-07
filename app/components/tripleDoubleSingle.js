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

    render(){
        return(
            <View style={styles.flexbox}>
                <TouchableOpacity onPress = {() => {
                    this.onSelect(3,"T");
                    this.changeBackgroundImageT();}}>
                    <ImageBackground  style={styles.image} reizeMode='contain' source={this.state.uriT} >
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>Triple</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {
                    this.onSelect(2,'D');
                    this.changeBackgroundImageD();}}>
                    <ImageBackground style = {styles.image} reizeMode='contain' source={this.state.uriD} >
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>Double</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() =>{
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

    },
    image:{
        flexGrow:1,
        width: 132,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TripleDoubleSingle;
