/**
 * Created by Max on 1/29/2018.
 */

import React from 'react';

import { View, Text } from 'react-native';

export class CheckoutNumber extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            checkoutNum: 0
        }
    }

    //calls the server for data on the current checkout Number
    async fetchPostCode() {
        try {
            //fetches data from the url where server is being hosted
            let response = await fetch("http://localhost:3000/out-data/game/ran-num")

            //turns data into a json object
            let responseJson = await response.json();
            //whenever you want to change the state use 'setState' method of this
            this.setState({
                //'checkoutNum' is what the key is for the data being sent
                checkoutNum:responseJson['outNum']
            })
        }
        catch(err){
            console.error(' fetchPostCode() Error: ', err);
        }
    }

    /* TODO: find a way to call the fetchPostCode Function when view is loaded

     */
    render(){
        return (
          <View>
              <Text>{this.state.checkoutNum}</Text>
          </View>
        );
    }
}

export default CheckoutNumber;