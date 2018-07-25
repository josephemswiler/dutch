import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, TouchableHighlight, Animated, Alert } from 'react-native'
import { Fonts } from '../utils/Fonts'
import Icon from 'react-native-vector-icons/EvilIcons'
import Drawer from './Drawer'


export default class Card extends Component {
    constructor (props) {
        super(props) 

        this.state={
            status: this.props.status,
            owner: this.props.owner,
            amount: this.props.amount,
            note: this.props.note,
            lowerCardHeight: 0,
            selection: null,
            options: [
                { name: 'paperclip', color: '#000000' },
                { name: 'comment', color: '#000000' },
                { name: 'user', color: '#000000' }
            ]
        }
        this._pt = new Animated.Value(0)
    }

    onPressExpand(element) {
        let optionsClone = [
            { name: 'paperclip', color: '#000000', height: 400 },
            { name: 'comment', color: '#000000', height: 200 },
            { name: 'user', color: '#000000', height: 160 }
        ]

        if (element === 'close-o' || ( element === 'lower' && this.state.selection )) {
            this.setState({
                lowerCardHeight: 0,
                selection: null,
                options: optionsClone
            })
            return
        }

        if (element === 'lower') {
            element = 'user'
        }

        let targetIdx = parseInt(optionsClone.map( (item, idx) => item.name === element ? idx : null).join(''))
        
        optionsClone[targetIdx] = { name: 'close-o', color: '#FF5E57', height: optionsClone[targetIdx].height }

        this.setState({
            lowerCardHeight: optionsClone[targetIdx].height,
            selection: element,
            options: optionsClone
        })
    }

    payButtonPress = () => {
        Alert.alert('pay')
    }

    makeNoteCard() {
        if (this.state.note) {
            return (
                <View style={styles.noteCard}>
                    <View style={styles.topButtonRow}>
                        <View style={styles.buttonRowLeft}>
                            <TouchableHighlight onPress={this.payButtonPress} style={styles.buttonTouchable}>
                                <View style={styles.payButtonView}>
                                    <View style={styles.buttonTextWrapper}>
                                        <Icon name="check" size={26} color="#0BE881" />
                                        <Text style={styles.payButtonText}> Pay Now</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonRowRight}>
                            <TouchableHighlight onPress={this.payButtonPress} style={styles.buttonTouchable}>
                                <View style={styles.disputeButtonView}>
                                    <View style={styles.buttonTextWrapper}>
                                        <Icon name="close-o" size={26} color="#FF5E57" />
                                        <Text style={styles.payButtonText}> Dispute</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <Text style={styles.noteText}>{this.state.note}</Text>
                </View>
            )
        }
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
                <View style={styles.iconRow}>
                    {this.state.options.map((item, idx) => {
                        return (
                            <Icon key={idx} onPress={() => this.onPressExpand(item.name)} style={styles.otherIcon} name={item.name} size={26} color={item.color} /> 
                          )
                    })}
                </View>
                <View >
                    {this.makeNoteCard()}
                </View>
                <Animated.View style={{ height: this.state.lowerCardHeight }}>
                    <View selection={this.props.selection}>
                        <Drawer selection={this.state.selection} />
                    </View>
                </Animated.View>
                <TouchableHighlight onPress={() => this.onPressExpand('lower')}>
                    <View style={styles.lowerCard}>
                        <Text style={styles.cardFooterLeft}>{this.state.status}</Text>
                        <Text style={styles.cardFooterRight}>$ {parseFloat(Math.round(this.state.amount * 100) / 100).toFixed(2)}</Text>
                    </View>
                </TouchableHighlight>
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
