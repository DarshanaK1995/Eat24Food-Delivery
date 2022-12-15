import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { colors } from '../global/styles'
import { createDrawerNavigator } from '@react-navigation/drawer'
import RootClientTab from './RootClientTab'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import 'react-native-gesture-handler';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen'
import DriverConsoleScreen from '../screens/DriverConsoleScreen'
import DrawerContent from '../components/DrawerContent'

const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props} />}
    >
        <Drawer.Screen
            name='RootClientTabs'
            component={RootClientTab}
            options = {{
                headerShown:false,
                title: 'Client',
                drawerIcon : ({focussed,size}) =>(
                    <IonicIcon
                    type = "material-community"
                    name='home'
                    color={focussed ? '#7cc' : colors.grey2 }
                    size = {size}
                />
                )
            }}
        />
         <Drawer.Screen
            name='Business Console'
            component={BusinessConsoleScreen}
   
            options = {{
                headerShown:false,
                title: 'Business console',
                drawerIcon : ({focussed,size}) =>(
                    <IonicIcon
                    type = "material-community"
                    name='business'
                    color={focussed ? '#7cc' : colors.grey2 }
                    size = {size}
                />
                )
            }}
        />
<Drawer.Screen
            name='Driver Console'
            component={DriverConsoleScreen}
            options = {{
                headerShown:false,
                title: 'Driver console',

                drawerIcon : ({focussed,size}) =>(
                    <Image
                    source={require('../../assets/Image/delivery-man.png')}
                    style={{ height: size, width: size }}
                    // size={size}
                    resizeMode="contain"
                //     <IonicIcon
                //     type = "material"
                //     name='home'
                //     color={focussed ? '#7cc' : colors.grey2 }
                //     size = {size}
                 />  
                )
            
            }}

        />
    </Drawer.Navigator>
  )
}
export default DrawerNavigator

const styles = StyleSheet.create({
    
})