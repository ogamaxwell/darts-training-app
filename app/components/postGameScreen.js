/**
 * Created by Max on 1/28/2018.
 */

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import PlayAgainButton from '../containers/playAgainButton';

class PostGameScreen extends React.Component {

    static  navigationOptions = {
        title: 'Post Game'
    };

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <PlayAgainButton/>
            </View>
        );
    }
}

export default PostGameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
});
