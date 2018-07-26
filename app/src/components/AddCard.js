import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, TouchableHighlight, Animated, Alert } from 'react-native'
import { Fonts } from '../utils/Fonts'
import Icon from 'react-native-vector-icons/EvilIcons'
import Drawer from './Drawer'


export default class Card extends Component {
    constructor (props) {
        super(props) 

        this.state={
            add: {
                owner: 'Shane',
                name: `Dinner at Torchy's`,
                location: `Torchy's Tacos`,
                date: `06/28/2018`,
                note: `Hey guys! Had a great time at the bday - this is split evenly amongst us and should cover all the food and drinks we devoured. No rush on payment. Great to see y’all!`,
                allocate: false,
                members: [
                  'Joe',
                  'Jen'
                ],
                grandTotal: 28,
                taxTotal: 2,
                tipTotal: 3,
                items: {
                  id: 1,
                  name: 'Chips',
                  quantity: 1,
                  amount: 2.50
                },
                image: require('../../assets/images/receipt.png')
              }
        }
    }

    payButtonPress = () => {
        Alert.alert('pay')
    }

    onPressNext = () => {

    }

    render() {
        return (
            <View style={styles.card}>
                <View style={styles.upperCard}>
                    <View style={styles.profileInner}>
                        <Image style={styles.profileImage} source={require('../../assets/images/p1.jpg')} alt="profile image" />
                        <Text style={styles.profileName}>{this.state.owner}</Text>
                    </View>
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
                <Animated.View style={styles.lowerCard}>
                    <View>
                        
                    </View>
                    <TouchableHighlight style={styles.nextButtonHighlight} onPress={() => this.onPressNext()}>
                        <View style={styles.nextButtonTextWrapper}>
                            <Text style={styles.nextButtonText}>Next</Text>
                        </View>
                    </TouchableHighlight>
                </Animated.View>
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
    nextButtonHighlight: {
        borderRadius: 30
    },
    nextButtonTextWrapper: {
        width: '100%', 
        backgroundColor: '#ffffff',
        fontFamily: Fonts.WorkSansRegular,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8
    },
    nextButtonText: {
        fontFamily: Fonts.WorkSansRegular,
    },
    profileInner: {
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    profileName: {
        marginTop: 10,
        color: '#4BCFFA',
        fontSize: 12,
        fontFamily: Fonts.WorkSansRegular
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
    noteCard: {
        backgroundColor: '#485460',
        padding: 15,
        paddingBottom: 0,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonTouchable: {
        borderRadius: 15
    },
    topButtonRow: {
        width: '100%',
        flexDirection: 'row'
    },
    buttonRowLeft: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    buttonRowRight: {
        marginLeft: 'auto',
        marginBottom: 10
    },
    payButtonView: {
        height: 30,
        width: 130,
        borderRadius: 15,
        backgroundColor: '#ffffff',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
    },
    payButtonText: {
        marginTop: 2,
        color: '#000000',
        fontSize: 14,
        fontFamily: Fonts.WorkSansRegular,
    },
    disputeButtonView: {
        height: 30,
        width: 130,
        borderRadius: 15,
        backgroundColor: '#ffffff',
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noteText: {
        color: '#ffffff',
        fontSize: 12,
        fontFamily: Fonts.WorkSansRegular,
        paddingLeft: 16,
        paddingRight: 16
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
    }
})  

AppRegistry.registerComponent('app', () => Card)
