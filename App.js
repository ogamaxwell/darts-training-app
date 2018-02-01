import React from 'react';
import { StyleSheet, Button, View, Text, ImageBackground } from 'react-native';
import {StackNavigator} from "react-navigation";
import CheckoutNumber from './app/components/checkoutNumber';
import CurrentCheckout from './app/components/currentCheckout';
import TripleDoubleSingle from './app/components/tripleDoubleSingle';
import NumberSelection from './app/components/numberSelection';
import SelectionsMade from './app/components/selectionsMade';

class PreGameScreen extends React.Component {

  static navigationOptions = {
    title: 'Pre Game',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Pre Game</Text>
        <Button
            title="Practice"
            onPress ={() => navigate('Game')}
        />
      </View>
    );
  }
}

class GameScreen extends React.Component {

  static  navigationOptions = {
    title: 'Game'
  };

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <ImageBackground style={{width: 300, height: 300, alignItems: 'center', justifyContent: 'center'}} source={require("./app/assets/bg_board.png")}>
            <CheckoutNumber/>
            <CurrentCheckout/>
            <SelectionsMade/>
          </ImageBackground>
        </View>
        <View>
          <TripleDoubleSingle/>
          <NumberSelection/>
        </View>
      </View>
    );
  }
}

class PostGameScreen extends React.Component {

    static  navigationOptions = {
        title: 'Post Game'
    };

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
              <Text>Post Game</Text>
              <Button
                  title="Practice Again"
                  onPress ={function(){
                      navigate('Game');
                  }}
              />
            </View>
        );
    }
}

 const StackApp = StackNavigator({
     Game: {screen: GameScreen},
    PreGame: {screen: PreGameScreen},
     PostGame: {screen: PostGameScreen},
});

//calls the app into the view
//this is what makes the view load.
export default class App extends React.Component {
  render() {
    return <StackApp/>;
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
