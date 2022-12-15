import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import {colors,parameters} from '../global/styles';
import { resturantsdata } from '../global/Data';


const FoodCart = ({
    OnPressFoodCart,
    resturantName,
    farAway,
    businessAdd,
    averageReview,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberofReview,
    images,
    screenWidth
}) => {
  return (
    <TouchableOpacity>
    <View style={{...styles.cardView, width:screenWidth}}>
        <Image 
            style = {{...styles.image, width:screenWidth}}
            source = {images}
        />
         <View>
        <View>
            <Text style={styles.restaurantName}>{resturantName}</Text>
        </View>

        <View style = {{flex:1, flexDirection:'row'}}>
            <View style = {styles.distance}>
                <IonicIcon 
                name ='location'
                color={colors.grey2}
                size={18}
                iconStyle = {{
                    marginTop:3
                }}/>
            <Text style = {styles.min}>{farAway} Min</Text>
                   
            </View>
            <View style={{flex:9,flexDirection:'row'}}>
                <Text style={styles.address}>
                    {businessAdd}
                </Text>
            </View>
        </View>
    </View>
    </View>

   
    <View style={styles.review}>
        <Text style={styles.average}>{averageReview}</Text>
        <Text style={styles.numberofReview}>{numberofReview}reviews</Text>
    </View>
    </TouchableOpacity>
  )
}

export default FoodCart

const styles = StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150,
    },
    restaurantName:{
        fontSize:17,
        fontWeight: 'bold',
        color: colors.grey,
        marginTop:5,
        marginLeft:10
    },
    distance :{
        flex:4,
        flexDirection:'row',
        color:colors.grey4,
        paddingHorizontal:5,
        borderWidth:1,
    },
    min:{
        fontSize:13,
        fontWeight:'bold',
        paddingTop:5,
        color: colors.grey3
    },
    address:{
        fontSize:13,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10,
    },
    review:{
        position:'absolute',
        top:0,
        right:10,
        backgroundColor:'rgba(52,52,52,0.3)',
        padding:2,
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:5,
        borderBottomLeftRadius:12,
    },
    average:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginTop:-3,
    },
    numberofReview:{
        color:"white",
        fontSize:13,
        marginRight:0,
        marginLeft:0
    }
})