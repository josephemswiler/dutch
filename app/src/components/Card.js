import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View ,Image } from 'react-native'
import { Fonts } from '../utils/Fonts'
import Icon from 'react-native-vector-icons/EvilIcons'

export default class Card extends Component {
  render() {
    return (
        <View style={styles.card}>
            <View style={styles.upperCard}>
                <Image style={styles.profileImage} source={require('../../assets/images/p1.jpg')} alt="profile image" />
                <View style={styles.upperCardText}>
                    <Text style={styles.cardTitle}>Dinner at Torchy's</Text>
                    <View style={styles.detailRow}>
                        <View style={styles.detailIcon}>
                            <Icon name="location" size={26} color="#000000" /> 
                        </View>
                        <View style={styles.locationText}>
                            <Text style={styles.cardDetails}>Torchy's Tacos</Text>
                        </View>
                    </View>
                    <View style={styles.detailRow}>
                        <View style={styles.detailIcon}>
                            <Icon name="calendar" size={26} color="#000000" /> 
                        </View>
                        <View style={styles.dateText}>
                            <Text style={styles.cardDetails}>06/27/2018</Text>
                        </View>
                    </View>
                </View> 
            </View>
            <View style={styles.iconRow}>
                <Icon style={styles.otherIcon} name="paperclip" size={26} color="#000000" /> 
                <Icon style={styles.otherIcon} name="comment" size={26} color="#000000" /> 
                <Icon style={styles.otherIcon} name="user" size={26} color="#000000" /> 
            </View>
            <View style={styles.lowerCard}>
                <Text style={styles.cardFooterLeft}>You received</Text>
                <Text style={styles.cardFooterRight}>$140.00</Text>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    card: {
      textAlign: 'center',
      color: '#333333',
      backgroundColor: 'rgba( 255, 255, 255, 1)',
      borderRadius: 5,
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowColor: 'black',
      shadowOffset: { height: 5, width: 5 },
      marginBottom: 20,
    },
    upperCard: {
      padding: 15,
      paddingBottom: 0,
      flexDirection: 'row',
      alignItems: 'center'
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 30
    },
    upperCardText: {
      marginLeft: 15,
    },
    cardTitle: {
      fontSize: 20,
      fontFamily: Fonts.WorkSansRegular
    },
    detailRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 2,
    },
    cardDetails: {
      fontSize: 12,
      fontFamily: Fonts.WorkSansRegular,
      paddingBottom: 2,
      paddingLeft: 2
    },
    iconRow: {
      textAlign: 'right',
      padding: 8,
      marginLeft: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
    },
    otherIcon: {
      padding: 4,
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

AppRegistry.registerComponent('app', () => Card)
