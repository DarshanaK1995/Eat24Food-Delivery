import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import {colors,parameters} from '../global/styles';
import {withBadge,Icon} from '@rneui/base';
import {} from '@rneui/themed'

const HomeHeader = ({navigation}) => {
const BadgeIcon = withBadge(4)(Icon)

  return (
    <View style={styles.header}>
        <View style={{alignItems:'center',justifyContent:'center',marginLeft:15}}>
            <IonicIcon 
                type = "material-community"
                name = "menu"
                color = {colors.Cardbackground}
                size = {31}
                onPress = {()=> {
                        navigation.toggleDrawer()
                }}
            />
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:colors.Cardbackground,fontSize:25,fontWeight:'bold'}}>
                Eat24Food
            </Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginRight:22}}>
            <BadgeIcon
                type="material-community"
                name="cart"
                size = {31}
                color={colors.Cardbackground}

            />
        </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height : parameters.headerHeight,
        justifyContent:'space-between'
    }
})