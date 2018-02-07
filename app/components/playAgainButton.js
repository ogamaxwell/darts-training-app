/**
 * Created by Max on 2/5/2018.
 */

import React from 'react';
import {Button, View} from 'react-native';
import {withNavigation} from 'react-navigation';




class PlayAgainButton extends React.Component {

    clean =()=>{
        this.props.cleanState();
    };

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <Button title="Practice Again" onPress = {() => {this.clean(); navigate("Game")}}/>
            </View>
        )
    }
}

export default withNavigation(PlayAgainButton);
