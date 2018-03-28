/**
 * Created by Max on 1/28/2018.
 */

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigator, withNavigation} from "react-navigation";
import store from '../store';
import {cleanState} from '../actions';

import * as firebase from 'firebase';


class PreGameScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }

    static navigationOptions = {
        title: 'Pre Game',
        header: null,
    };

    /**
     * When the App component mounts, we listen for any authentication
     * state changes in Firebase.
     * Once subscribed, the 'user' parameter will either be null
     * (logged out) or an Object (logged in)
     */
    componentDidMount() {
        this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                loading: false,
                user,
            });
            console.log("user " + user.email + " is logged in!");
        });
    }

    /**
     * Don't forget to stop listening for authentication state changes
     * when the component unmounts.
     */
    componentWillUnmount() {
        this.authSubscription();
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button
                    title="Two Dart Out"
                    onPress = {() => {
                        navigate('twoDart');
                        store.dispatch(cleanState());
                    }}
                />
                <Button
                    title = "Three Dart Out"
                    onPress = {() => {
                        navigate('threeDart');
                        store.dispatch(cleanState());
                    }}
                />
                <Button title="Sign Up / Login" onPress={() => navigate('SignUp')}/>
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