import React, {Component} from 'react'
import {StyleSheet, View, ScrollView, Alert, Text} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { Ionicons } from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import Card from './src/components/Card'
import TopBar from './src/components/TopBar'

// export default class App extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       listColor: '#FF5E57',
//       addColor: '#000000',
//       cards: [
//         {
//           status: 'Please pay',
//           owner: 'Shane',
//           note: `Hey guys! Had a great time at the bday - this is split evenly amongst us and should cover all the food and drinks we devoured. No rush on payment. Great to see y’all!`,
//           amount: 28
//         },
//         {
//           status: 'You paid',
//           owner: 'Shane',
//           note: null,
//           amount: 32
//         },
//         {
//           status: 'You received',
//           owner: 'Joe',
//           note: null,
//           amount: 140
//         },
//         {
//           status: 'You requested',
//           owner: 'Joe',
//           note: null,
//           amount: 210
//         }
//       ]
//     }
//   }

//   render() {
//     return (
//       <LinearGradient style={styles.container} colors={['#F15F79', '#B24592']}>
//         <ScrollView>
//           <View style={styles.statusGutter} />
//           <TopBar listColor={this.state.listColor} addColor={this.state.addColor}/>
//           <View style={styles.content}>
//             {this.state.cards.map((item, idx) => {
//                 return (
//                   <Card key={idx} status={item.status} owner={item.owner} amount={item.amount} note={item.note} />
//                 )
//             })}
//           </View>
//         </ScrollView>
//       </LinearGradient>
//     )
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { Text, View } from 'react-native';

import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  constructor (props) {
        super(props)
    
        this.state = {
          listColor: '#FF5E57',
          addColor: '#000000',
          cards: [
            {
              status: 'Please pay',
              owner: 'Shane',
              note: `Hey guys! Had a great time at the bday - this is split evenly amongst us and should cover all the food and drinks we devoured. No rush on payment. Great to see y’all!`,
              amount: 28
            },
            {
              status: 'You paid',
              owner: 'Shane',
              note: null,
              amount: 32
            },
            {
              status: 'You received',
              owner: 'Joe',
              note: null,
              amount: 140
            },
            {
              status: 'You requested',
              owner: 'Joe',
              note: null,
              amount: 210
            }
          ]
        }
      }
    
      render() {
        return (
          <LinearGradient style={styles.container} colors={['#F15F79', '#B24592']}>
            <ScrollView>
              <View style={styles.statusGutter} />
              {/* <TopBar listColor={this.state.listColor} addColor={this.state.addColor}/> */}
              <View style={styles.content}>
                {this.state.cards.map((item, idx) => {
                    return (
                      <Card key={idx} status={item.status} owner={item.owner} amount={item.amount} note={item.note} />
                    )
                })}
              </View>
            </ScrollView>
          </LinearGradient>
        )
      }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default TabNavigator(
  {
    Receipts: { screen: HomeScreen },
    Add: { screen: SettingsScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Receipts') {
          iconName = `navicon`;
        } else if (routeName === 'Add') {
          iconName = `plus`;
        }
        return <Icon name={iconName} size={26} color={tintColor} /> 
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#FF5E57',
      inactiveTintColor: '#485460',
    },
    animationEnabled: true,
    swipeEnabled: false,
  }
);

const styles = StyleSheet.create({
  content: {
    flex: 2,
    textAlign: 'center',
    width: '100%',
    padding: 20
  },
  statusGutter: {
    height: 22,
    backgroundColor: 'rgba( 255, 255, 255, 0.5)',
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
