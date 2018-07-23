import React, {Component} from 'react'
import {StyleSheet, Text, View ,Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Fonts } from './src/utils/Fonts'

export default class App extends Component {
  render() {
    return (
      
      <LinearGradient style={styles.container} colors={['#F15F79', '#B24592']}>
        <View style={styles.statusGutter} />
        <View style={styles.title}>
          <Text style={styles.titleText}>dutch</Text>
        </View>
          <View style={styles.content}>
            <View style={styles.card}>
              <View style={styles.upperCard}>
                <Image style={styles.profileImage} source={require('./assets/images/p1.jpg')} />
                <View style={styles.upperCardText}>
                  <Text style={styles.cardTitle}>Dinner at Torchy's</Text>
                  <Text style={styles.cardDetails}>Torchy's Tacos</Text>
                  <Text style={styles.cardDetails}>06/27/2018</Text>
                </View>
              </View>
              <View style={styles.lowerCard}>
              <Text style={styles.cardFooterLeft}>You received</Text>
              <Text style={styles.cardFooterRight}>$140.00</Text>
              </View>
            </View>
          </View>
      </LinearGradient>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusGutter: {
    height: 20,
    backgroundColor: 'rgba( 255, 255, 255, 0.8)',
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
    width: '100%',
    padding: 20,
  },
  card: {
    height: 100,
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'rgba( 255, 255, 255, 0.8)',
    borderRadius: 5,
  },
  upperCard: {
    padding: 15,
    flexDirection: 'row',

    alignItems: 'center'
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  upperCardText: {
    marginLeft: 15
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: Fonts.WorkSansRegular
  },
  cardDetails: {
    fontSize: 12,
    fontFamily: Fonts.WorkSansRegular,
    marginTop: 2
  },
  lowerCard: {
    backgroundColor: '#485460',
    padding: 6,
    width: '100%',
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardFooterLeft: {
    color: '#ffffff',
    paddingLeft: 9,
    fontSize: 12,
    fontFamily: Fonts.WorkSansRegular,
  },
  cardFooterRight: {
    color: '#0BE881',
    textAlign: 'right',
    paddingRight: 9,
    fontSize: 20,
    fontFamily: Fonts.WorkSansBold,
    marginLeft: 'auto',
  }
})
