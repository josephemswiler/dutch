import React, { Component } from 'react'
import { StyleSheet, AppRegistry, TextInput, View, Button } from 'react-native'
import { Fonts } from '../utils/Fonts'

export default class ChatInput extends Component {
  constructor (props) {
    super(props)

    this.textInput = React.createRef()
    this.createPost = this.createPost.bind(this)
    this.state = {
        text: ''
    }
  }

  createPost() {
    if(this.state.text.trim() === '')
        return

    let post = {
        image: require('../../assets/images/p1.jpg'),
        name: 'Joe',
        date: '1d',
        message: this.state.text.trim()
    }

    this.props.postChat(post)
    this.textInput.current.value = ''
  }

  render() {
    return (
      <View style={styles.inputView}>
        <TextInput
            ref={this.textInput}
            clearButtonMode="always"
            style={styles.inputText}
            placeholder="Say something..."
            onChangeText={(text) => this.setState({text})}
        />
        <View style={styles.postButtonWrapper}>
            <Button
                onPress={() => this.createPost()}
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
        padding: 4,
        paddingLeft: 15
    },
    inputText: {
        padding: 4,
        paddingLeft: 9,
        width: 0,
        flexGrow: 1,
    },
    postButtonWrapper: {
        marginLeft: 'auto',
        textAlign: 'right',
        paddingRight: 9
    }
})

AppRegistry.registerComponent('app', () => ChatInput)
