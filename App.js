import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import {StackNavigator} from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>About to make a dope ass app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
