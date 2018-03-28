import React from 'react';
import { StyleSheet, Button, View, Text, ImageBackground } from 'react-native';
import {StackNavigator} from "react-navigation";
//bring in redux
import {Provider} from 'react-redux';
import store from './app/store';

import PostGameScreen from './app/components/postGameScreen';
import GameScreen from './app/components/gameScreen';
import PreGameScreen from './app/components/preGameScreen';
import TwoDartOutGameScreen from './app/components/twoDartOut/twoDartOutGame';
import ThreeDartOutGameScreen from './app/components/threeDartOut/threeDartOutGame';
import BustScreen from './app/components/bustScreen/bustScreen';
import SignUp from './app/components/signUp';

import * as firebase from 'firebase';



export const StackApp = StackNavigator({
    PreGame: {screen: PreGameScreen},
    SignUp: {screen: SignUp},
    twoDart: {screen: TwoDartOutGameScreen},
    PostGame: {screen: PostGameScreen},
    BustScreen: {screen: BustScreen},
    threeDart: {screen: ThreeDartOutGameScreen},
    Game: {screen: GameScreen},
});


//calls the app into the view
//this is what makes the view load.
export default class App extends React.Component {


  render() {
      let config = {
          apiKey: "AIzaSyA8nhQb3st_84vNM2X5yM1UX3af8QEd7pc",
          authDomain: "dartsapp-777bd.firebaseapp.com",
          databaseURL: "https://dartsapp-777bd.firebaseio.com",
          projectId: "dartsapp-777bd",
          storageBucket: "dartsapp-777bd.appspot.com",
          messagingSenderId: "759732626897"
      };
      firebase.initializeApp(config);
    return(
        <Provider store={store}>
            <StackApp/>
        </Provider>
        )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      backgroundColor: '#000000',
  },
});
