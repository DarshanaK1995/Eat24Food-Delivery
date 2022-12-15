import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator,TransitionPresets} from '@react-navigation/native-stack'
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import RootClientTab from '../Navigation/RootClientTab';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';

const Auth = createNativeStackNavigator();

const authNavigators = () => {
  return (
   <Auth.Navigator>
    <Auth.Screen
        name='SignInWelcomeSceen'
        component={SignInWelcomeScreen}
        options = {{headerShown : false,
                   
                }}
    />
    <Auth.Screen
        name='SignInScreen'
        component={SignInScreen}
        options = {{headerShown : false,
                    
                }}
    />
    <Auth.Screen
        name='DrawerNavigator'
        component={DrawerNavigator}
        options = {{headerShown : false,
                }}
    />

<Auth.Screen
        name='RestaurantsMapScreen'
        component={RestaurantsMapScreen}
        options = {{headerShown : false,
                }}
    />
   </Auth.Navigator>
  )
}

export default authNavigators