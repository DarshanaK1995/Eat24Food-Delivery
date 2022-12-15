import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { colors } from '../global/styles';

import Ionicicon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen'
import MyOrdersScreen from '../screens/MyOrdersScreen'
import MyAccountscreen from '../screens/MyAccountscreen';
import ClientStack from './ClientStack';

const ClientTabs = createBottomTabNavigator();

const RootClientTab = () => {
  return (
   <ClientTabs.Navigator
        screenOptions = {{
            tabBarActiveTintColor:colors.buttons
        }}
    >
    <ClientTabs.Screen
        name = "Home"
        component={HomeScreen}
        options ={
            {
                headerShown : false,
            tabBarLable : "Home",
            tabBarIcon  : ({color,size})=>(
                <Ionicicon
                    name='home'
                    type = 'material'
                    color={color}
                    size={size}
                    
                />
            )
            }
        }

    />
    <ClientTabs.Screen
        name = "ClientSearch"
        component={ClientStack}
        options ={
            {
            tabBarLable : "Search",
            headerShown : false,
            tabBarIcon  : ({color,size})=>(
                <Ionicicon
                    name='search'
                    type = 'material'
                    color={color}
                    size={size}
                />
            )}
        }

    />
    <ClientTabs.Screen
        name = "OrdersScreen"
        component={MyOrdersScreen}
        options ={
            {
            tabBarLable : "My Orders",
            headerShown : false,
            tabBarIcon  : ({color,size})=>(
                <Ionicicon
                    name='ios-list'
                    type = 'material'
                    color={color}
                    size={size}
                />
            )
            }
        }

    />
     <ClientTabs.Screen
        name = "MyAccount"
        component={MyAccountscreen}
        options ={
            {
            tabBarLable : "My Account",
            headerShown : false,
            tabBarIcon  : ({color,size})=>(
                <Ionicicon
                    name='person'
                    type = 'material'
                    color={color}
                    size={size}
                />
            )
            }
        }

    />

    
   </ClientTabs.Navigator>
  )
}

export default RootClientTab

const styles = StyleSheet.create({})