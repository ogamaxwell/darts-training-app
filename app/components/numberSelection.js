/**
 * Created by Max on 1/30/2018.
 */

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

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
    }

    render(){
        return(
                /*
                * single row
                * */
            <View>
                <View style={styles.flexRow}>
                    {this.index1.map(i => {
                        return <TouchableOpacity>
                            <ImageBackground style={styles.imageBox} source={require("../assets/btn_number_off.png")}>
                                <View style={styles.textView}>
                                    <Text style={styles.textStyle} key={i}>{i}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    })}
                </View>
                <View style={styles.flexRow}>
                    {this.index2.map(i => {
                        return <TouchableOpacity>
                            <ImageBackground style={styles.imageBox} source={require("../assets/btn_number_off.png")}>
                                <View style={styles.textView}>
                                    <Text style={styles.textStyle} key={i}>{i}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    })}
                </View>
                <View style={styles.flexRow}>
                    {this.index3.map(i => {
                        return <TouchableOpacity>
                            <ImageBackground style={styles.imageBox} source={require("../assets/btn_number_off.png")}>
                                <View style={styles.textView}>
                                    <Text style={styles.textStyle} key={i}>{i}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    })}
                </View>
                <View style={styles.flexRow}>
                    {this.index4.map(i => {
                        return <TouchableOpacity>
                            <ImageBackground style={styles.imageBox} source={require("../assets/btn_number_off.png")}>
                                <View>
                                    <Text style={styles.textStyle} key={i}>{i}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    })}
                    <TouchableOpacity>
                        <ImageBackground style={styles.imageBox} source={require("../assets/btn_number_off.png")}>
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
                    <TouchableOpacity>
                        <View style={styles.test}>
                            <ImageBackground style={styles.submitImage} source={require('../assets/btn_submit.png')}>
                                <View>
                                    <Text style={styles.textStyle}>Submit</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
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
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitImage: {
        width: 210,
        height: 70,
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


