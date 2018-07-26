import React, {Component} from 'react'
import {StyleSheet, View, ScrollView, Alert, Text} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import LinearGradient from 'react-native-linear-gradient'
import Card from './src/components/Card'
import AddCard from './src/components/AddCard'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <LinearGradient style={styles.container} colors={['#ffffff', '#fab1a0']}>
        <ScrollView>
          <View style={styles.statusGutter} />
          <View style={styles.content}>
            <AddCard />
          </View>
        </ScrollView>
      </LinearGradient>
    )
  }
}

// import { TabNavigator, TabBarBottom } from 'react-navigation'

// class HomeScreen extends Component {
//   constructor (props) {
//         super(props)
    
//         this.state = {
//           listColor: '#FF5E57',
//           addColor: '#000000',
//           cards: [
//             {
//               status: 'Please pay',
//               owner: 'Shane',
//               note: `Hey guys! Had a great time at the bday - this is split evenly amongst us and should cover all the food and drinks we devoured. No rush on payment. Great to see y’all!`,
//               amount: 28
//             },
//             {
//               status: 'You paid',
//               owner: 'Shane',
//               note: null,
//               amount: 32
//             },
//             {
//               status: 'You received',
//               owner: 'Joe',
//               note: null,
//               amount: 140
//             },
//             {
//               status: 'You requested',
//               owner: 'Joe',
//               note: null,
//               amount: 210
//             }
//           ]
//         }
//       }
    
//       render() {
//         return (
//           <LinearGradient style={styles.container} colors={['#ffffff', '#fab1a0']}>
//             <ScrollView>
//               <View style={styles.statusGutter} />
//               <View style={styles.content}>
//                 {this.state.cards.map((item, idx) => {
//                     return (
//                       <Card key={idx} status={item.status} owner={item.owner} amount={item.amount} note={item.note} />
//                     )
//                 })}
//               </View>
//             </ScrollView>
//           </LinearGradient>
//         )
//       }
// }

// class AddScreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     )
//   }
// }

// export default TabNavigator(
//   {
//     Receipts: { screen: HomeScreen },
//     Add: { screen: AddScreen },
    
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state
//         let iconName
//         if (routeName === 'Receipts') {
//           iconName = `navicon`
//         } else if (routeName === 'Add') {
//           iconName = `plus`
//         }
//         return <Icon name={iconName} size={26} color={tintColor} /> 
//       },
//     }),
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     tabBarOptions: {
//       activeTintColor: '#FF5E57',
//       inactiveTintColor: '#485460',
//     },
//     animationEnabled: true,
//     swipeEnabled: false,
//   }
// )

const styles = StyleSheet.create({
  content: {
    flex: 2,
    textAlign: 'center',
    width: '100%',
    padding: 20
  },
  statusGutter: {
    height: 22,
    backgroundColor: 'transparent',
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
