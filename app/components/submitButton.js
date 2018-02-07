/**
 * Created by Max on 2/3/2018.
 */

import React from 'react';
import {TouchableOpacity, View, ImageBackground, Text, StyleSheet} from 'react-native';
import store from '../store';
import { withNavigation } from 'react-navigation';



class SubmitButton extends React.Component {

    onSelect = () => {

        let data = store.getState();
        let multiplier = data.updateMultiplier[0];
        let selection = data.updateSelection;
        let currentCheckout = data.updateCurrentCheckout;
        let turns = data.updateTurns;
        let label = data.updateMultiplier[1];
        const {navigate} = this.props.navigation;
        if (turns -1 === 0 || this.props.current < 1) {
            navigate('PostGame');
        }
        this.props.submitButtonPressed(multiplier,selection,currentCheckout, turns, label);

    };

    render(){
        const {navigate} = this.props.navigation;
        return(


        <TouchableOpacity onPress = {() => this.onSelect()}>
            <View style={styles.test}>
                <ImageBackground style={styles.submitImage} source={require('../assets/btn_submit.png')}>
                    <View>
                        <Text style={styles.textStyle}>Submit</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    submitImage: {
        width: 195,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,

    },
    test: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default withNavigation(SubmitButton);
