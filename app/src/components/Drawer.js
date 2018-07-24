import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, TouchableHighlight, Animated, Alert, ScrollView } from 'react-native'
import { Fonts } from '../utils/Fonts'
import Icon from 'react-native-vector-icons/EvilIcons'
import ChatInput from './ChatInput'

export default class Drawer extends Component {
    constructor (props) {
        super(props) 

        this.state={
          selection: this.props.selection,
          messages: [
            {
                image: require('../../assets/images/p1.jpg'),
                name: 'Joe',
                date: '1d',
                message: `Hell y'all! This looks great! Yeehaw! Let's do this again sometime!`
            },
            {
                image: require('../../assets/images/p1.jpg'),
                name: 'Joe',
                date: '8h',
                message: `yesssssyesssssyesssssyesssssyesssssyesssssyesssssyesssss`
            }
          ]
        }
    }

    postChat(newPost) {
        let post = {
            image: '../../assets/images/p1.jpg',
            name: 'Joe',
            date: '1d',
            message: `Hell y'all! This looks great! Yeehaw! Let's do this again sometime!`
        }
    }

    makeDrawer() {

        switch (this.props.selection) {
            case 'paperclip':
            return (
                <ScrollView>
                    <View style={styles.receiptImage}>
                        <Image style={styles.receipt}  source={require('../../assets/images/receipt.png')} alt="receipt image" />
                    </View>
                </ScrollView>
            )
            case 'comment':
            
            return (
                <View style={styles.topChatWrapper}>
                    <ScrollView>
                        <View style={styles.chatView}>
                        {this.state.messages.map( (item, idx) => {
                            return (
                                <View style={styles.chatRow} key={idx}>
                                    <Image style={styles.chatImage} source={ item.image } alt="profile image" />
                                    <View style={styles.chatStatus}>
                                        <Text style={styles.chatName}>{item.name}</Text>
                                        <Text style={styles.chatDate}>{item.date}</Text>
                                    </View>
                                    <View style={styles.chatMessageWrapper}>
                                        <Text style={styles.chatMessage}>{item.message}</Text>
                                    </View>
                                </View>
                            )
                        })}
                        </View>
                    </ScrollView>
                    <ChatInput postChat={this.postChat} />
                </View>
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
        paddingRight: 15,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    receiptImage: {
        padding: 6,
        width: '100%',
        alignItems: 'center'
    },
    receipt: {
        width: '100%'
    },
    topChatWrapper: {
        paddingTop: 10,
        flexDirection: 'column',
        alignSelf: 'flex-start',
        width: '100%'
    },
    chatView: {
        flexDirection: 'column',
        alignSelf: 'flex-start'
    },
    chatRow: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
        flex: 1,
        flexWrap: 'wrap'
      },
    chatImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        top: 0
    },
    chatStatus: {
        flexDirection: 'column'
    },
    chatName: {
        color: '#4BCFFA',
        fontSize: 12,
        fontFamily: Fonts.WorkSansRegular,
        marginLeft: 5
    },
    chatDate: {
        color: '#ffffff',
        fontSize: 12,
        fontFamily: Fonts.WorkSansRegular,
        marginLeft: 5
    },
    chatMessageWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 0,
        flexGrow: 1
    },
    chatMessage: {
        color: '#ffffff',
        fontSize: 12,
        fontFamily: Fonts.WorkSansRegular,
        alignSelf: 'flex-start',
        paddingLeft: 10,
        flexWrap: 'wrap'
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
        backgroundColor: '#ffffff'
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
        fontFamily: Fonts.WorkSansRegular
      }
})  

AppRegistry.registerComponent('app', () => Drawer)
