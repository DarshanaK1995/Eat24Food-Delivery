import { StyleSheet, Text, View,Linking,Pressable,Alert,Switch,TouchableOpacity,Image} from 'react-native'
import React, {useState,useContext,useEffect} from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer'

import {
    Avatar,
    Button,
    Icon
} from '@rneui/base'
import { IonicIcon } from 'react-native-vector-icons/Ionicons'
import { colors } from '../global/styles'

const DrawerContent = (props) => {
  return (
<View style={styles.Container}>
      <DrawerContentScrollView {...props}>

   <View style={{backgroundColor:colors.buttons}}>
      <View style={{flexDirection:'row', alignItems:'center', 
                    paddingLeft:20, paddingVertical:10}}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}   
          size = {75}
          source = {{uri:"https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.whatsappimages.in%2F&psig=AOvVaw1o6DZavSvBAZbn_IK3FYpW&ust=1670925826137000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCp0fbp8_sCFQAAAAAdAAAAABAS"}}     
        />
        <View style={{marginLeft:10}}>
          <Text style={{fontWeight:'bold',color:colors.Cardbackground,fontSize:18}}>Darshu Dear</Text>
          <Text style={{color:colors.Cardbackground,fontSize:14}}>darshu@eat24food.com</Text>
        </View>
    </View>
        
       <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
       <View style={{flexDirection:'row',}}>
          <View style={{marginLeft:10, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontWeight:'bold',color:colors.Cardbackground,fontSize:14}}>
                  1
                </Text>
                <Text style={{color:colors.Cardbackground,fontSize:14}}>
                  My Favourite
                </Text>
          </View>

          <View style={{marginLeft:10, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontWeight:'bold',color:colors.Cardbackground,fontSize:14}}>
                  1
                </Text>
                <Text style={{color:colors.Cardbackground,fontSize:14}}>
                  My Cart
                </Text>
          </View>
        </View>

       </View>
      </View>
      <DrawerItemList {...props}/>
    
      <DrawerItem
        label = "Payment"
        icon={({ focused, color, size }) => {
          return (
           
          <Image
            source={require('../../assets/Image/credit-card.png')}
            style={{ height: size, width: size }}
            // size={size}
            resizeMode="contain"
          />
          );
        }}
      />

      
<DrawerItem
        label = "Pramotion"
        icon={({ focused, color, size }) => {
          return (
           
          <Image
            source={require('../../assets/Image/tag.png')}
            style={{ height: size, width: size }}
            // size={size}
            resizeMode="contain"
          />
          );
        }}
      />
      <DrawerItem
        label = "Setting"
        icon={({ focused, color, size }) => {
          return (
           
          <Image
            source={require('../../assets/Image/gear.png')}
            style={{ height: size, width: size }}
            // size={size}
            resizeMode="contain"
          />
          );
        }}
      />
      <DrawerItem
        label = "Help"
        icon={({ focused, color, size }) => {
          return (
           
          <Image
            source={require('../../assets/Image/lifebuoy.png')}
            style={{ height: size, width: size }}
            // size={size}
            resizeMode="contain"
          />
          );
        }}
      />

      <View style={{borderWidth:1, borderTopColor:colors.grey5}}>
        <Text style={styles.preferences}>
          Preferences
        </Text>
        <View style={styles.switchText}>
            <Text style={styles.darkThemeText}>
              Dark Theme
            </Text>
            <View style={{paddingLeft:10}}>
              <Switch
              trackColor={{false : "#767577" , true: "#81b0ff" }}
              thumbColor = "#f4f3f4"/>
            </View>
        </View>
      </View>
     
      </DrawerContentScrollView>

      <DrawerItem
        label = "Sign Out"
        icon={({ focused, color, size }) => {
          return (
           
          <Image
            source={require('../../assets/Image/log-out.png')}
            style={{ height: size, width: size }}
            // size={size}
            resizeMode="contain"
          />
          );
        }}
      />

</View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
  Container :{
    flex:1,
  },
  avatar:{
    borderWidth:4,
    borderColor:colors.pagebackground,
  },
  preferences:{
    fontSize:18,
    color:colors.grey2,
    paddingTop:10,
    paddingLeft:20
  },
  switchText:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingLeft:20,paddingVertical:5,
    paddingRight:10,
  },
  darkThemeText:{
    fontSize:16,
    color:colors.grey2,
    paddingTop:10,
    paddingLeft:0,
    fontWeight:'bold',
  }
})