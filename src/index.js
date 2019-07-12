import React from 'react'

import AddCity from './AddCity/AddCity'
import Cities from './Cities/Cities'
import City from './Cities/City'
import {View} from 'react-native'

import { colors } from './theme'

import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Icon from 'react-native-vector-icons/Ionicons';

const CitiesNav = createStackNavigator({
  Cities: {screen: Cities},
  City: {screen: City}
},{
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: colors.primary,
    },
  }
})

const Tabswithout = createMaterialBottomTabNavigator({
  AddCity: { screen: AddCity,
            navigationOptions:{
                tabBarLabel:'Add City',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-add'}/>
                    </View>),
            }
        },
  Cities: { screen: CitiesNav,
            navigationOptions:{
                tabBarLabel:'Cities',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-globe'}/>
                    </View>),
            }
        }
},{
  activeColor: colors.primary,
  barStyle: { backgroundColor: '#fff' },

})

const Tabs = createAppContainer(Tabswithout);

export default Tabs
