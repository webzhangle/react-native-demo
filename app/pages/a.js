import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Button
} from 'react-native';
export default class login extends Component {
    render() {
        return (
            <SafeAreaView>
                <Button title="Sign in!" onPress={this.sign} />
            </SafeAreaView>
        )
    }
    sign () {
        
    }
}
