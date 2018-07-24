import React, { Component } from 'react'
import { StyleSheet, AppRegistry, TextInput, View } from 'react-native'

export default class ChatInput extends Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }

  render() {
    return (
      <View style={{padding: 10, width: '100%'}}>
        <TextInput
          style={{height: 40}}
          placeholder="Say something..."
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

AppRegistry.registerComponent('app', () => ChatInput)
