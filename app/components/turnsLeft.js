/**
 * Created by Max on 2/6/2018.
 */

import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';


class TurnsLeft extends React.Component {

    render(){
        const holder = [];

        if(this.props.selections.length > 0){
            holder.push(
                <View key={this.props.selections}>
                    {this.props.selections.map(i => {
                        return(<Text style={styles.textStyle} key={i}>{i}</Text>)
                    })}
                </View>
            );
        }

        for(let i = 0; i < this.props.turnsLeft; i++){
            holder.push(
                <View key={i}>
                    <Image key={i} style={styles.image} source={require("../assets/dart2.png")}/>
                </View>
            );
        }

        return(
            <View  style={styles.container}>
                { holder }
            </View>
        )
    }
}

export default TurnsLeft;

const styles = StyleSheet.create({
   image: {
       width: 30,
       height: 30,
   },
    container: {
       flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        padding: 5
    },
});
