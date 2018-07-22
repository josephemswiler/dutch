/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.statusGutter} />
        <View style={styles.title}>
          <Text style={styles.titleText}>dutch</Text>
        </View>
        <View style={styles.content}>
          <Text>Split expenses amongst friends.</Text>
        </View>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
   
  },
  statusGutter: {
    height: 20,
    backgroundColor: 'rgba( 0, 0, 0, 0.8)',
    width: '100%',
  },
  title: {
    height: 45,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba( 255, 255, 255, 0.8)'
  },
  titleText: {
    textAlign: 'center'
  },
  content: {
    flex: 2,
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'red',
    height: '100%',
    width: '100%'
  },
});
