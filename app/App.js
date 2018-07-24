import React, {Component} from 'react'
import {StyleSheet, View, ScrollView, Alert} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Card from './src/components/Card'
import TopBar from './src/components/TopBar'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <LinearGradient style={styles.container} colors={['#F15F79', '#B24592']}>
        <ScrollView>
          <View style={styles.statusGutter} />
          <TopBar />
          <View style={styles.content}>
            <Card />   
            <Card />
            <Card />
            <Card />
          </View>
        </ScrollView>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 2,
    textAlign: 'center',
    width: '100%',
    padding: 20
  },
  statusGutter: {
    height: 20,
    backgroundColor: 'rgba( 255, 255, 255, 1)',
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
