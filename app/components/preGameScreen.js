/**
 * Created by Max on 1/28/2018.
 */

import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigator, withNavigation} from "react-navigation";



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

export default withNavigation(PreGameScreen);