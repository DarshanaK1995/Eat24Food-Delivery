import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './authNavigators'

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <AuthStack/>
    </NavigationContainer>
  )
}

export default RootNavigator