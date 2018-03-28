/**
 * Created by Max on 3/3/2018.
 */


import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {Input} from '../components/inputField';
import {Button} from '../components/authButton';
import * as firebase from 'firebase';
import {withNavigation} from 'react-navigation';


class SignUp extends React.Component {

    static navigationOptions = {
        headerTitle: 'Login',
    };

     constructor(props){
         super(props);
         this.state = {
             email: '',
             password: '',
             loading:true,
         }
     }

    componentWillMount() {

        this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                loading: false,
                user,
            });

        });
    }

     componentWillUnmount() {
         this.authSubscription();
     }

    onLogin = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
                console.log(firebase.auth().currentUser);

            })
            .then(() => {
                const {navigate} = this.props.navigation;
                Alert.alert("You are now signed in!");
                navigate('PreGame');
            })
            .catch((error) => {
                const { code, message } = error;
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
                Alert.alert(code,message);
            });
    };

    onRegister = () => {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
            })
            .then(() => {
                const {navigate} = this.props.navigation;
                Alert.alert("Thank you for Joining!");
                navigate('PreGame');
            })
            .catch((error) => {
                const { code, message } = error;
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
                Alert.alert(code,message);
            });
    };

    render () {
        let navigate = this.props.navigation;
        return (
            <View style = {styles.container}>
                <Input
                    placeholder="Enter your email..."
                    label="Email"
                    onChangeText = {email => this.setState({email})}
                    value = {this.state.email}
                />
                <Input
                    placeholder="Enter your password..."
                    label="Password"
                    secureTextEntry
                    onChangeText = {password => this.setState({password})}
                    value = {this.state.password}
                />

                <Button onPress={ () => {
                    this.onLogin();
                }}>Login</Button>
                <Button onPress={ () => {
                    this.onRegister();
                }}>Register</Button>
                <Text>Reset Password</Text>
            </View>
        )
    }
}

export default withNavigation(SignUp);

const styles = StyleSheet.create({
   container: {
       flex:1,
       padding: 20,
   }
});
