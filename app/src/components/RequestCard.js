import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, TouchableHighlight, Animated, Alert, ScrollView } from 'react-native'
import { Fonts } from '../utils/Fonts'
import Icon from 'react-native-vector-icons/EvilIcons'
import ChatInput from './ChatInput'


export default class RequestCard extends Component {
    constructor (props) {
        super(props) 

        this.state={
          note: this.props.note,
          owner: this.props.owner
        }
    }

    render() {
        return (
            <View style={styles.requestCard}>
                {this.makeDrawer()}
            </View>
        )   
    }
}


const styles = StyleSheet.create({
    requestCard: {

    }
})  

AppRegistry.registerComponent('app', () => RequestCard)
