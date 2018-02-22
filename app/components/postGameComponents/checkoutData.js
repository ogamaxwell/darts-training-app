/**
 * Created by Max on 2/8/2018.
 */


import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


class checkoutData extends React.Component {

    constructor(props){
        super(props);
        this.props.getData(this.props.checkoutNumber);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.whiteText}>MOST COMMON CHECKOUT</Text>
                    <View style= {styles.flexBox}>
                        {this.props.selectionsMade.map(i => {
                            return(<View style={styles.boxes}><Text style={styles.whiteText} key={i}>{i}</Text></View>)
                        })}
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.whiteText}>PDC CHECKOUT</Text>
                    <View style= {styles.flexBox}>
                        {this.props.bestCombo.map(i => {
                            return(<View style={styles.boxes}><Text style={styles.whiteText} key={i}>{i}</Text></View>)
                        })}
                    </View>
                </View>
            </View>
        )
    }
}
export default checkoutData;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
    },
   flexBox: {
     flexDirection: 'row',
       justifyContent: "center",
       alignItems: 'center',
   },
   boxes:{
       backgroundColor: "#3879e2",
       justifyContent: "center",
       alignItems: 'center',
       flexDirection: 'row',
       padding: 10,
       margin: 10
   },
    whiteText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
});