import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react';
import {colors, parameters} from '../global/styles'
import Ionicicon from 'react-native-vector-icons/Ionicons'
import {Icon} from '@rneui/base'

const Header = ({title, type, navigation}) => {
  return (
    <View style={styles.header}>
        <View style = {{marginLeft:20}}>
            <Ionicicon name={type} size={30} color = {colors.heaherText}
            type = "material-community"

            onPress = {()=> {navigation.goBack()}}
            />
            </View>
            <View>
            <Text style ={styles.headerText}>{title}</Text>
            </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header :{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
    },
    headerText:{
      color : colors.heaherText,
      fontSize:22,
      fontWeight:"bold",
      marginLeft:30,
    }
})