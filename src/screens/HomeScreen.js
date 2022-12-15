import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,ScrollView,FlatList,
    Pressable,Image, Dimensions} from 'react-native'

import CountDown from 'react-native-countdown-component'

import HomeHeader from '../components/HomeHeader'
import { colors,parameters } from '../global/styles'
import {filterData, resturantsdata} from '../global/Data'
import IonicIcon from 'react-native-vector-icons/Ionicons' 
import MaterialIcon from 'react-native-vector-icons/MaterialIcons' 
import FoodCart from '../components/FoodCart'

const SCREEN_WIDTH = Dimensions.get('window').width

const HomeScreen = ({navigation}) => {
    const [delivery, setdelivery] = useState(true);
    const [indexcheck, setindexcheck] = useState("0")
  return (
    <View style={styles.container}>
        
        <HomeHeader navigation={navigation}/>

        <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator = {true}>
      <View style={{backgroundColor:colors.Cardbackground, paddingBottom:5}}>
      <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity
            onPress={() =>{
                setdelivery(true)
            }}>
                <View style = {{...styles.deliverButton,backgroundColor: delivery ? colors.buttons : colors.grey4}}>
                    <Text style ={styles.deliveryText}>
                        Delivery
                    </Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity
            onPress={() =>{
                setdelivery(false)
                navigation.navigate("RestaurantsMapScreen")
            }}
            >
                <View style = {{...styles.deliverButton,backgroundColor: delivery ? colors.grey5 : colors.buttons}}>
                    <Text style ={styles.deliveryText}>
                        Pick Up
                    </Text>
                </View>
            </TouchableOpacity>
      </View>

      </View>

      <View style={styles.filterStyle}>
      <View style={styles.addressView}>
             <View style={{flexDirection:"row", alignItems:'center',paddingLeft:10}}>
            <IonicIcon
                
                name = "location-sharp"
                color = {colors.grey}
                size = {26} 
                />  
            <Text style = {{marginLeft:5}}>33, Happy Street</Text>

             </View>
             <View style={styles.clockViewStyle}>
            <IonicIcon
                
                name = "time-sharp"                
                color = {colors.grey}
                size = {26} 
                />  
            <Text style = {{marginLeft:5}}>Now</Text>

             </View>
      </View>
      <View>
      <MaterialIcon
                name = "tune"                
                color = {colors.grey}
                size = {26} 
                /> 
      </View>
      </View>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>
            Categories
        </Text>
      </View>
            <View>
                <FlatList
                    horizontal ={true}
                    showsHorizontalScrollIndicator = {false}
                    data = {filterData}
                    keyExtractor = {(item) => item.id}
                    extraData = {indexcheck} 
                    renderItem = {({item,index})=>(
                        <Pressable 
                        onPress={()=>{setindexcheck(item.id)}}>
                            <View style={indexcheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                                <Image
                                     style = {{height:60, width:60, borderRadius:30}}
                                     source = {item.image}
                                />
                                <View>
                                    <Text style={indexcheck === item.id ? {...styles.smallCardTextSelected}:
                                    {...styles.smallCardText}}>{item.name}</Text>
                                </View>
                            </View>

                        </Pressable>

                    )}
                />
            </View>
            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>
                    Free Delivery Now
                </Text>
            </View>
            <View >
                <View style={{flexDirection:'row',alignItems:'center',alignContent:'center', marginTop:10}}>
                        <Text style={{marginLeft:15,fontSize:16,marginTop:-10,marginLeft:5}}>
                            Options Changing in </Text>
                        <CountDown
                            until={3600}
                            size={14}
                            digitStyle={{backgroundColor:colors.lightgreen}}
                            digitTxtStyle={{color:colors.Cardbackground}}
                            timeToShow={['M','S']}
                            timeLabels={{m:'Min',s:'Sec'}}
                        />
                        
                </View>

                <FlatList
                    style={{marginTop:10,marginBottom:10}}
                    horizontal={true}
                    data={resturantsdata}
                    keyExtractor = {(item,index)=>index.toString()}
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item})=>(
                        <View style={{marginRight:5}}>
                            <FoodCart
                            screenWidth={SCREEN_WIDTH*0.8}
                            images = {item.images}
                            resturantName={item.resturantName}
                            farAway = {item.farAway}
                            businessAdd={item.businessAdd}
                            averageReview={item.averageReview}
                            numberofReview={item.numberofReview}
                            />
                                                   
                         </View>
                    )}
                />
            </View>

            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>
                   Pramotions Available
                </Text>
            </View>
            <View>
                <FlatList
                    style={{marginTop:10,marginBottom:10}}
                    horizontal={true}
                    data={resturantsdata}
                    keyExtractor = {(item,index)=>index.toString()}
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item})=>(
                        <View style={{marginRight:5}}>
                            <FoodCart
                            screenWidth={SCREEN_WIDTH*0.8}
                            images = {item.images}
                            resturantName={item.resturantName}
                            farAway = {item.farAway}
                            businessAdd={item.businessAdd}
                            averageReview={item.averageReview}
                            numberofReview={item.numberofReview}
                            />
                                                   
                         </View>
                    )}
                />
            </View>
            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>
                   Restaurants in Your Area
                </Text>
            </View>
            <View style={{width:SCREEN_WIDTH,paddingTop:10}}>
                {
                    delivery && 
                    resturantsdata.map(item=>(
                        <View key={item.id} style = {{paddingBottom:20}}>
                            <FoodCart
                                screenWidth={SCREEN_WIDTH*0.95}
                                images = {item.images}
                                resturantName={item.resturantName}
                                farAway = {item.farAway}
                                businessAdd={item.businessAdd}
                                averageReview={item.averageReview}
                                numberofReview={item.numberofReview}
                            />

                        </View>
                    ))
                }

            </View>

      </ScrollView>
      {
      <View style={styles.floatButton}>
        <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('RestaurantsMapScreen')
                }}
            >
            <IonicIcon
                name = 'location'
                type = 'material'
                size={33}
                color={colors.buttons}
            />
            <Text style={{color:colors.grey2}}>Map</Text>

        </TouchableOpacity>
      </View>
            }
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    deliverButton : {
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:10
    },
    deliveryText :{
        marginLeft:5,
        fontSize:16,

    },
    filterStyle:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-evenly',
        marginHorizontal:10,
        marginVertical:10
    },
    clockViewStyle:{
        flexDirection:"row", 
             alignItems:'center',
             marginLeft:20,
             marginRight:15,
             borderRadius:15,
             backgroundColor:colors.Cardbackground,
             paddingHorizontal:8
             
    },
    addressView:{
        flexDirection:'row',
         backgroundColor:colors.grey5,
         borderRadius:15,
         paddingVertical:5,
         paddingHorizontal:20,
        },
        headerText:{
            color:colors.grey,
            fontSize:24,
            fontWeight:'bold',
            paddingLeft:10,
        },
        headerTextView:{
            backgroundColor:colors.grey5,
            paddingVertical:3,
        },
        smallCard:{
            borderRadius:30,
            backgroundColor: colors.grey5,
            justifyContent: 'center',
            alignItems:'center',
            padding:5,
            width:80,
            margin:10,
            height:100,
        },
        smallCardSelected:{
            borderRadius:30,
            backgroundColor: colors.buttons,
            justifyContent: 'center',
            alignItems:'center',
            padding:5,
            width:80,
            margin:10,
            height:100,
        },
        smallCardTextSelected :{
            fontWeight:'bold',
            color:colors.Cardbackground,

        },
        smallCardText :{
            fontWeight:'bold',
            color : colors.grey2, 
        },
        floatButton :{
            position : 'absolute',
            bottom:10,
            right:15,
            backgroundColor:'white',
            elevation:10,
            width:60,
            height:60,
            borderRadius:30,
            alignItems:'center'
        }
})