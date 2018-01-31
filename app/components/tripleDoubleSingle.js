/**
 * Created by Max on 1/29/2018.
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

class TripleDoubleSingle extends React.Component{
    constructor(props){
        super(props);
        this.prop = {
            selection: Number,
        };
    }

    render(){
        return(
            <View style={styles.flexbox}>
                <TouchableOpacity style = {styles.image}>
                    <Image reizeMode='contain' source={require("../assets/btn_segment_off.png")} />
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Triple</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.image}>
                    <Image reizeMode='contain' source={require("../assets/btn_segment_off.png")} />
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Double</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.image}>
                    <Image reizeMode='contain' source={require("../assets/btn_segment_off.png")} />
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Single</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flexbox:{
        flexDirection: 'row',
    },
    imageButton:{
        borderWidth: 1,
    },
    button: {
        alignItems: 'center',
        padding: 10,
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
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    //testing
    paragraph: {
        textAlign: 'center'
    },
    image:{
        flexGrow:1,
        width: 125,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
    }


});

export default TripleDoubleSingle;
