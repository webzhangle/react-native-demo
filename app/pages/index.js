import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Button
} from 'react-native';
export default class Index extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <SafeAreaView>
                <Button title="Index" onPress={()=>{this.sign()}} />
            </SafeAreaView>
        )
    }
    sign () {
        this.props.navigation.navigate('App');
    }
}
