import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, TouchableHighlight, Animated, Alert, ScrollView } from 'react-native'
import { Fonts } from '../utils/Fonts'
import Icon from 'react-native-vector-icons/EvilIcons'

export default class Drawer extends Component {
    constructor (props) {
        super(props) 

        this.state={
          selection: this.props.selection
        }
    }

    makeDrawer() {

        switch (this.props.selection) {
            case 'paperclip':
            return (
                <ScrollView>
                    <View style={styles.receiptImage}>
                        <Image style={styles.receipt}  source={require('../../assets/images/receipt.png')} alt="receipt image" />
                        <Text style={styles.profileName}>Joe</Text>
                    </View>
                </ScrollView>
            )
            case 'comment':
            return (
                <ScrollView>
                    <View style={styles.chatView}>
                        <Image style={styles.chatImage} source={require('../../assets/images/p1.jpg')} alt="profile image" />
                    </View>
                </ScrollView>
            )
            case 'user':
            return (
                <ScrollView horizontal={true} snapToAlignment='center' showsHorizontalScrollIndicator={false}>
                    <View style={styles.card}>
                        <View style={styles.innerCard}>
                            <Image style={styles.profileImage} source={require('../../assets/images/p1.jpg')} alt="profile image" />
                            <Text style={styles.profileName}>Joe</Text>
                            <View style={styles.cardOver} />
                        </View>
                        <View style={styles.lowerCard}>
                            <Text style={styles.cardFooterCenter}>$28.00</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.innerCard}>
                            <Image style={styles.profileImage} source={require('../../assets/images/p1.jpg')} alt="profile image" />
                            <Text style={styles.profileName}>Joe</Text>
                            <View style={styles.cardOver} />
                        </View>
                        <View style={styles.lowerCardSuccess}>
                            <Text style={styles.cardFooterCenter}>$28.00</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.innerCard}>
                            <Image style={styles.profileImage} source={require('../../assets/images/p1.jpg')} alt="profile image" />
                            <Text style={styles.profileName}>Joe</Text>
                            <View style={styles.cardOver} />
                        </View>
                        <View style={styles.lowerCardDanger}>
                            <Text style={styles.cardFooterCenter}>$28.00</Text>
                        </View>
                    </View>
                </ScrollView>
            )
        }
    }

    render() {
        return (
            <View style={styles.drawer}>
                {this.makeDrawer()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#485460',
        padding: 6,
        paddingLeft: 15,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    receiptImage: {
        padding: 6,
        width: '100%',
        alignItems: 'center',
    },
    receipt: {
        width: '100%',
    },
    chatView: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    chatImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    card: {
        textAlign: 'center',
        color: '#333333',
        backgroundColor: 'transparent',
        borderRadius: 5,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 0 },
        marginRight: 15
      },
      cardOver: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '75%',
        width: '100%',
        backgroundColor: 'white',
      },
      innerCard: {
        textAlign: 'center',
        alignItems: 'center'
      },
      profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 10,
        marginBottom: 5,
        borderWidth: 5,
        borderColor: '#485460',
        zIndex: 1
      },
      profileName: {
        color: '#4BCFFA',
        fontSize: 12,
        fontFamily: Fonts.WorkSansRegular,
        marginBottom: 5,
        zIndex: 1
      },
      lowerCard: {
        backgroundColor: '#BDC7CE',
        padding: 3,
        borderRadius: 5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      lowerCardSuccess: {
        backgroundColor: '#0BE881',
        padding: 3,
        borderRadius: 5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      lowerCardDanger: {
        backgroundColor: '#FF5E57',
        padding: 3,
        borderRadius: 5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      cardFooterCenter: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: Fonts.WorkSansRegular,
      }
})  

AppRegistry.registerComponent('app', () => Drawer)
