import { StyleSheet, Text, View, Dimensions,FlatList } from 'react-native'
import React from 'react'
import SearchResultCard from '../components/SearchResultCard'
import {resturantsdata} from '../global/Data'
import { colors } from '../global/styles'


const SCREEN_WIDTH = Dimensions.get('window').width;
const SearchResultScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View>
                <FlatList 
                     style ={{backgroundColor:colors.Cardbackground}}
                    data = {resturantsdata}
                    keyExtractor ={(item,index)=>index.toString()}
                    renderItem ={({item,index})=> (

                        <SearchResultCard
                            screenWidth = {SCREEN_WIDTH}
                            images = {item.images}
                            averageReview ={item.averageReview}
                            numberOfReview ={item.numberofReview}
                            restaurantName ={item.resturantName}
                            farAway ={item.farAway}
                            businessAddress ={item.businessAdd}
                            productData ={item.productData}
                            OnPressRestaurantCard ={()=>{navigation.navigate("RestaurantHomeScreen",{id:index,restaurant:item.restaurantName})}}
                        />
                                    
                          )}

                     ListHeaderComponent ={
                        <View>
                            <Text style ={styles.listHeader}>{resturantsdata.length} Result for {route.params.item}</Text>
                        </View>
                     }   

                     showsVerticalScrollIndicator ={false}
                />
            </View>
    </View>
  )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})