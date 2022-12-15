import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import {colors, title,parameters} from '../../global/styles';
import Ionicicon from 'react-native-vector-icons/Ionicons';
import {Button, SocialIcon} from '@rneui/base';
import Swiper from 'react-native-swiper';

//import Images

import slidefood1 from '../../../assets/Image/slidefood1.jpg'
import slidefood2 from '../../../assets/Image/slidefood2.jpg';
import slidefood3 from '../../../assets/Image/slidefood3.jpg';
import slidefood4 from '../../../assets/Image/slidefood4.jpg';


const SignInWelcomeScreen = ({navigation}) => {
  
  return (
    <View style={{flex:1}}>
    <View style={{justifyContent:'flex-start',alignItems:'center',paddingTop:19}}>
      <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
      <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>IN YOUR AREA</Text>
    </View>
    <View style={{flex:4,marginTop:50,justifyContent:'center',alignItems:'center'}}>
    <Swiper autoplay={true}>
      <View style={styles.slide1}>
      <Image
        source={slidefood1}
        style={{height:"100%", width:"100%"}}
        />
      </View>
      <View style={styles.slide2}>
      <Image
        source={slidefood2}
        style={{height:"100%", width:"100%"}}
        />
      </View>
      <View style={styles.slide3}>
      <Image
        source={slidefood3}
        style={{height:"100%", width:"100%"}}
        />
      </View>
      <View style={styles.slide4}>
      <Image
        source={slidefood4}
        style={{height:"100%", width:"100%"}}
        />
      </View>
    </Swiper>
        
    </View>
    
    <View style={{flex:4,justifyContent:'flex-end', marginBottom:20}}>
    <View style = {{marginHorizontal:19, marginTop:30}}>
        <Button 
        title="Sign IN"
        buttonStyle = {parameters.styleButton}
        titleStyle  = {parameters.buttonTitle}
        onPress = {() =>{
            navigation.navigate("SignInScreen");
        }}
        />
      </View>
      <View style={{marginHorizontal:19,marginTop:30}}>
          <Button
          title= "Create An Account"
          buttonStyle = {styles.createButton}
          titleStyle= {styles.createButtonTitle}/>
        </View>


    </View>
    
    </View>
  )
}

export default SignInWelcomeScreen

const styles = StyleSheet.create({
  slide1 :{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#90064EB'
  },
  slide2 :{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#90064EB'
  },
  slide3 :{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#90064EB'
  },
  slide4 :{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#90064EB'
  },

  createButton:{
    backgroundColor:"white",
    alignContent:'center',
    justifyContent:'center',
    borderRadius:12,
    borderWidth: 2,
    borderColor:"#ff8c52",
    height:50,
    paddingHorizontal:19,
    borderColor:colors.buttons,
  },
  createButtonTitle:{
      color:colors.grey,
      fontSize:20,
      fontWeight:"bold",
      alignItems:"center",
      justifyContent: "center",
      marginTop: -3,
  }

})