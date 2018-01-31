import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import {StackNavigator} from "react-navigation";
import CheckoutNumber from './app/components/checkoutNumber';
import CurrentCheckout from './app/components/currentCheckout';
import TripleDoubleSingle from './app/components/tripleDoubleSingle';

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
        <CheckoutNumber/>
        <CurrentCheckout/>
        <TripleDoubleSingle/>
        <Text>Game</Text>
        <Button
            title="Submit"
            onPress ={() => navigate('PostGame')}
        />


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
