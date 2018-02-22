/**
 * Created by Max on 2/5/2018.
 */

import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';




class PlayAgainButton extends React.Component {

    clean =()=>{
        this.props.cleanState();
    };

    render(){
        const {navigate} = this.props.navigation;

        return(
            <TouchableOpacity onPress = {() => {
                this.clean();
                navigate(this.props.gameMode);
            }}>
                <ImageBackground style={styles.imageBackground} source={require('../../assets/btn_submit.png')}/>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(PlayAgainButton);

const styles = StyleSheet.create({
    imageBackground: {
        width: 195,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red"

    },
    textStyle: {
        color: 'white',
        fontSize: 30,

    }
});
