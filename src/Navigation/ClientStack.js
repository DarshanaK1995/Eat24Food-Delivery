import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator, TransitionPresets} from "@react-navigation/native-stack"
import SearchScreen from '../screens/SearchScreen'
import SearchResultScreen from '../screens/SearchResultScreen'


const ClientSearch = createNativeStackNavigator() 

const ClientStack = () => {
  return (
    <ClientSearch.Navigator>

        <ClientSearch.Screen
            name='SearchScreen'
            component={SearchScreen}
            options = {
                ()=>({
                    headerShown:false
                })
            }
        />

<ClientSearch.Screen
            name='SearchResultScreen'
            component={SearchResultScreen}
            options = {
                ()=>({
                    headerShown:false
                })
            }
        />

    </ClientSearch.Navigator>
  )
}

export default ClientStack

const styles = StyleSheet.create({})