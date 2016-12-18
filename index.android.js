import React, { Component } from 'react';
import {
    AppRegistry,
    Text
} from 'react-native';

export class Awesome extends Component {
    render(){
        return (
            <Text>
                "Okay"
            </Text>
        );
    }
}


AppRegistry.registerComponent('Awesome', () => Awesome);
