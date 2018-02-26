/**
 * Created by Max on 1/30/2018.
 */

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import SubmitButton from '../containers/submitButton';

export default class NumberSelection extends React.Component {
    constructor(props) {
        super(props);
        this.row1 = [
            20,19,18,17,16,15
        ];
        this.index1 = this.row1;
        this.row2 = [
            14,13,12,11,10,9
        ];
        this.index2 = this.row2;
        this.row3 = [
            8,7,6,5,4,3,
        ];
        this.index3 = this.row3;
        this.row4 = [
            2,1
        ];
        this.index4 = this.row4;

        this.state = {
            20: require("../assets/btn_number_off.png"),
            19: require("../assets/btn_number_off.png"),
            18: require("../assets/btn_number_off.png"),
            17: require("../assets/btn_number_off.png"),
            16: require("../assets/btn_number_off.png"),
            15: require("../assets/btn_number_off.png"),
            14: require("../assets/btn_number_off.png"),
            13: require("../assets/btn_number_off.png"),
            12: require("../assets/btn_number_off.png"),
            11: require("../assets/btn_number_off.png"),
            10: require("../assets/btn_number_off.png"),
            9: require("../assets/btn_number_off.png"),
            8: require("../assets/btn_number_off.png"),
            7: require("../assets/btn_number_off.png"),
            6: require("../assets/btn_number_off.png"),
            5: require("../assets/btn_number_off.png"),
            4: require("../assets/btn_number_off.png"),
            3: require("../assets/btn_number_off.png"),
            2: require("../assets/btn_number_off.png"),
            1: require("../assets/btn_number_off.png"),
            25: require("../assets/btn_number_off.png"),
            selection: Number,


        };
    }
    onPress = (props) => {
        this.props.updateSelection(props);
        this.toggleOff(this.state.selection);
        this.changeBackgroundImage(props);
    };
    //find a way toggle items in an array
    changeBackgroundImage = (key) => {
        this.setState({
            [key]: require("../assets/btn_number_on.png"),
            selection: key,
        })
    };
    toggleOff = (key) =>{
        if(key === undefined){

        }
        else{
            this.setState({
                [key]: require("../assets/btn_number_off.png"),
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

    render(){
        return(
                /*
                * single row
                * */
            <View>
                <View style={styles.flexRow}>
                    {this.index1.map(i => {
                        return <TouchableOpacity onPress ={() => {this.onPress(i); this.playSound();}} key={i}>
                            <ImageBackground key={i} style={styles.imageBox} source={this.state[i]}>
                                <View key={i} style={styles.textView}>
                                    <Text style={styles.textStyle} key={i}>{i}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    })}
                </View>
                <View style={styles.flexRow}>
                    {this.index2.map(i => {
                        return <TouchableOpacity onPress ={() => {this.onPress(i); this.playSound();}} key={i}>
                            <ImageBackground key={i} style={styles.imageBox} source={this.state[i]}>
                                <View key={i} style={styles.textView}>
                                    <Text style={styles.textStyle} key={i}>{i}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    })}
                </View>
                <View style={styles.flexRow}>
                    {this.index3.map(i => {
                        return <TouchableOpacity onPress ={() => {this.onPress(i); this.playSound();}} key={i}>
                            <ImageBackground key={i} style={styles.imageBox} source={this.state[i]}>
                                <View key={i} style={styles.textView}>
                                    <Text  style={styles.textStyle} key={i}>{i}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    })}
                </View>
                <View style={styles.flexRow}>
                    {this.index4.map(i => {
                        return <TouchableOpacity onPress ={() => {this.onPress(i); this.playSound();}} key={i}>
                            <ImageBackground key={i} style={styles.imageBox} source={this.state[i]}>
                                <View key={i}>
                                    <Text style={styles.textStyle} key={i}>{i}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    })}
                    <TouchableOpacity onPress ={() => {this.onPress(25); this.playSound();}}>
                        <ImageBackground style={styles.imageBox} source={this.state[25]}>
                            <View>
                                <Text style={{color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: 20,}}>
                                    Bull</Text>
                                <Text style={{color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: 30,}}>25</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <SubmitButton/>
                </View>
            </View>



        )
    }
}

const styles = StyleSheet.create({
    textView: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    flexRow: {
        flexDirection:"row",
    },
    imageBox:{
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,

    },
    test:{
        justifyContent: 'center',
        alignItems: 'center',
    }
});


