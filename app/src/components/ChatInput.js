import React, { Component } from 'react'
import { StyleSheet, AppRegistry, TextInput, View, Button } from 'react-native'
import { Fonts } from '../utils/Fonts'

export default class ChatInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
        text: ''
    }
  }

  render() {
    return (
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Say something..."
          onChangeText={(text) => this.setState({text})}
        />
        <View style={styles.postButtonWrapper}>
            <Button
                onPress={this.props.postChat}
                title="POST"
                color="#4BCFFA"
                accessibilityLabel="Post message"
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    inputView: {
        width: '100%', 
        backgroundColor: '#ffffff',
        fontFamily: Fonts.WorkSansRegular,
        borderRadius: 30,
        flexDirection: 'row',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 5 }
    },
    inputText: {
        padding: 4,
        paddingLeft: 15,
    },
    postButtonWrapper: {
        marginLeft: 'auto',
        textAlign: 'right',
        paddingRight: 11,
    }
})

AppRegistry.registerComponent('app', () => ChatInput)
