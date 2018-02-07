import React from 'react';
import { StyleSheet, Button, View, Text, ImageBackground } from 'react-native';
import {StackNavigator} from "react-navigation";
//bring in redux
import {Provider} from 'react-redux';
import store from './app/store';

import PostGameScreen from './app/components/postGameScreen';
import GameScreen from './app/components/gameScreen';
import PreGameScreen from './app/components/preGameScreen';




export const StackApp = StackNavigator({

     Game: {screen: GameScreen},
    PreGame: {screen: PreGameScreen},
     PostGame: {screen: PostGameScreen},
});

//calls the app into the view
//this is what makes the view load.
export default class App extends React.Component {
  render() {
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
