import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View ,Image } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

export default class TopBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      listColor: this.props.listColor,
      addColor: this.props.addColor
    }
  }
  render() {
    return (
        <View style={styles.title}>
            <View style={styles.titleIconLeft}>
                <Icon name="navicon" size={26} color={this.state.listColor} /> 
            </View>
            <View style={styles.titleLogo}>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} alt="logo" />
            </View>
            <View style={styles.titleIconRight}>
                <Icon name="plus" size={26} color={this.state.addColor} /> 
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    title: {
      height: 45,
      fontSize: 20,
      flexDirection: 'row',
      textAlign: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: 'rgba( 255, 255, 255, 1)'
    },
    titleLogo: {
      textAlign: 'center',
      marginRight: 'auto',
      marginLeft: 'auto',
      textAlign: 'center',
      justifyContent: 'center',
    },
    logo: {
      height: 15,
      width: 65,
    },
    titleIconLeft: {
      textAlign: 'left',
      marginRight: 'auto',
      justifyContent: 'center',
      paddingLeft: 20,
    },
    titleIconRight: {
      textAlign: 'right',
      marginLeft: 'auto',
      justifyContent: 'center',
      paddingRight: 20,
    }
  })  

AppRegistry.registerComponent('app', () => TopBar)
