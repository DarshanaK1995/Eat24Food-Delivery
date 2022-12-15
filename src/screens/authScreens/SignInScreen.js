import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState, useRef} from 'react'
import {colors, title,parameters} from '../../global/styles'
import Ionicicon from 'react-native-vector-icons/Ionicons'
import {Button, SocialIcon} from '@rneui/base'
import Header from '../../components/Header'
import  * as Animatable from 'react-native-animatable';
import HomeScreen from '../HomeScreen'
import RootClientTab from '../../Navigation/RootClientTab'

const SignInScreen = ({navigation}) => {

  const [TextInput2Focused, setTextInput2Focused] = useState(false);
  const TextInput1 = useRef(1);
  const TextInput2 = useRef(2);


  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type={"arrow-back"} navigation={navigation}/>

      <View style={{marginVertical:19, marginTop:10}}>
        <Text style={title}>Sign-In</Text>
      </View>

      <View style={{alignItems:"center",marginTop:10}}>
        <Text style={styles.text1}>Please Enter the email and password</Text>
        <Text style={styles.text1}>ragister with your account</Text>
      </View>

      <View>
        <View style={{marginTop:19}}>
       <TextInput 
          style={styles.TextInput1}
          placeholder= "Email"
          ref={TextInput1}/>
        </View>

        <View style = {styles.TextInput2}>

        <Animatable.View animation = {TextInput2Focused ? "":"fadeInLeft"} duration={400}>
              <Ionicicon
              name='lock-closed' size={30} 
              
              />
        </Animatable.View>
        <TextInput 
        style = {{width:'80%'}}
        placeholder="Password"
        ref={TextInput2}
        onFocus={()=> {
          setTextInput2Focused(false)
        }}
        onBlur={()=> {
          setTextInput2Focused(true)
        }}/>
        <Animatable.View animation = {TextInput2Focused ? "":"fadeInLeft"} duration={400}>
        <Ionicicon
              name='eye-off' size={30}
              style={{marginRight:10}}/>
        </Animatable.View>
        </View>
      </View>
      <View style = {{marginHorizontal:19, marginTop:30}}>
        <Button 
        title="Sign IN"
        buttonStyle = {parameters.styleButton}
        titleStyle  = {parameters.buttonTitle}
        onPress = {()=> {navigation.navigate('DrawerNavigator')}}
        />
      </View>

        <View style = {{alignItems:'center',marginTop:15}}>
          <Text style = {{...styles.text1, textDecorationLine:"underline"}}> Forgot Password ?</Text>
        </View>
        <View style = {{alignItems:'center',marginTop:25, marginBottom: 25}}>
          <Text style = {{fontSize:19,fontWeight:'bold', color:"black"}}>OR</Text>
        </View>
          <View style={{marginTop:7, marginVertical: 7,alignItems:'center'}}>
            <SocialIcon
                  title='Sign In With Facebook'
                  button
                  type = "facebook"
                  style = {styles.SocialIcon}
                  onPress = {() => {}}/>
          </View>
          <View style={{marginTop:7, marginVertical: 7,alignItems:'center'}}>
            <SocialIcon
                  title='Sign In With Google'
                  button
                  type = "google"
                  style = {styles.SocialIcon}
                  onPress = {() => {}}/>
          </View>
          <View style = {{marginTop:15,marginLeft:19}}>
          <Text style = {{...styles.text1}}> New on Eat24Food ?</Text>
        </View>

        <View style={{alignItems:"flex-end",marginHorizontal:19}}>
          <Button
          title= "Create An Account"
          buttonStyle = {styles.createButton}
          titleStyle= {styles.createButtonTitle}/>
        </View>

    </View>
    
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  text1: {
    color: colors.grey3,
    fontSize:16
  },
  TextInput1 :{
      borderWidth:1,
      borderColor: "#86939e",
      marginHorizontal:19,
      borderRadius:12,
      marginBottom:20,
      paddingLeft:15,
  },
  TextInput2 :{
      borderWidth:1,
      borderColor:"#86939e",
      borderRadius:12,
      marginHorizontal:19,
      flexDirection:'row',
      justifyContent:'space-between',
      alignContent:'center',
      alignItems:'center'
  },
  SocialIcon: {
    borderRadius: 12,
    width: '90%',
    
  },
  createButton:{
    backgroundColor:"white",
    alignContent:'center',
    justifyContent:'center',
    borderRadius:12,
    borderWidth: 2,
    borderColor:"#ff8c52",
    height:40,
    paddingHorizontal:19
  },
  createButtonTitle:{
      color:"#ff8c52",
      fontSize:16,
      fontWeight:"bold",
      alignItems:"center",
      justifyContent: "center",
      marginTop: -3,
  }
})