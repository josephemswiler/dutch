import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, TouchableHighlight, Animated, Alert, ScrollView } from 'react-native'
import { Fonts } from '../utils/Fonts'
import Icon from 'react-native-vector-icons/EvilIcons'
import ChatInput from './ChatInput'
import RequestCard from './RequestCard'

export default class MemberList extends Component {
    constructor (props) {
        super(props) 

        this.state={
          members: [
            {
                image: require('../../assets/images/p1.jpg'),
                name: 'Joe',
                amountAllocated: 0
            },
            {
                image: require('../../assets/images/p1.jpg'),
                name: 'Joe',
                amountAllocated: 0
            },
            {
                image: require('../../assets/images/p1.jpg'),
                name: 'Joe',
                amountAllocated: 0
            },
            {
                image: require('../../assets/images/p1.jpg'),
                name: 'Joe',
                amountAllocated: 0
            },
            {
                image: require('../../assets/images/p1.jpg'),
                name: 'Joe',
                amountAllocated: 0
            }
          ]
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.refs.memberList.scrollToEnd()
          }, 100)
    }

    render() {
        return (
            <View style={styles.drawer}>
                <View style={styles.memberListWrapper}>
                    <ScrollView ref="memberList">
                        <View style={styles.memberListView}>
                        {this.state.members.map( (item, idx) => {
                            return (
                                <View style={styles.lowerCard} key={idx}>
                                    <Image style={styles.memberListImage} source={ item.image } alt="profile image" />
                                    <View style={styles.memberListStatus}>
                                        <Text style={styles.memberListName}>{item.name}</Text>
                                    </View>
                                    <View style={styles.memberListAmountWrapper}>
                                        <Text style={styles.memberListAmount}>$ {parseFloat(Math.round(item.amountAllocated * 100) / 100).toFixed(2)}</Text>
                                    </View>
                                </View>
                            )
                        })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#485460',
        padding: 6,
        paddingRight: 9,
        paddingTop: 0,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    memberListWrapper: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        width: '100%'
    },
    memberListView: {
        flexDirection: 'column',
        alignSelf: 'flex-start'
    },
    memberListImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        top: 0
    },
    memberListStatus: {
        flexDirection: 'column'
    },
    memberListName: {
        color: '#4BCFFA',
        fontSize: 16,
        fontFamily: Fonts.WorkSansRegular,
        marginLeft: 5
    },
    memberListAmountWrapper: {
        flexDirection: 'row',
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    memberListAmount: {
        color: '#FF5E57',
        fontSize: 16,
        fontFamily: Fonts.WorkSansMedium,
        alignSelf: 'flex-end',
        flexWrap: 'wrap'
    },
    lowerCard: {
        backgroundColor: '#485460',
        padding: 6,
        paddingLeft: 0,
        paddingRight: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})  

AppRegistry.registerComponent('app', () => MemberList)
