/**
 * Created by Max on 1/28/2018.
 */

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigator, withNavigation} from "react-navigation";



class PreGameScreen extends React.Component {

    static navigationOptions = {
        title: 'Pre Game',
        header: null,
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button
                    title="Two Dart Out"
                    onPress = {() => navigate('twoDart')}
                />
                <Button
                    title = "Three Dart Out"
                    onPress = {() => navigate('threeDart')}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
        //#dddfd4
    },
});

export default withNavigation(PreGameScreen);