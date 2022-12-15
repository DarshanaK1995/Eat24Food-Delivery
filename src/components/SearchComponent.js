import { StyleSheet, Text, View ,TouchableOpacity,Modal,TouchableWithoutFeedback,TextInput,FlatList,Keyboard} from 'react-native'
import React, {useState,useRef} from 'react'
import {colors} from '../global/styles'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { filterData} from '../global/Data'
import SearchScreen from '../screens/SearchScreen'
import filter from 'lodash/filter'

const SearchComponent = () => {

    const [modalVisible, setmodalVisible] = useState(false)
    const [textInputFocused, settextInputFocused] = useState(true)
    const [data, setdata] = useState([...filterData])
    const textInput = useRef(0)

    const navigation = useNavigation();

    const contains = ({name},query)=> {
        if(name.includes(query)){
            return true
        }
        return false
    }

    const handleSearch = text => {
        const dataS = filter(filterData, userSearch =>{
                return contains (userSearch, text)
        })

        setdata([...dataS])
    }

  return (
    <View style={{marginHorizontal:10}}>
      <TouchableWithoutFeedback
        onPress={()=>{
            setmodalVisible(true)
        }}
      >
        <View style={styles.SearchArea}>
            <IonicIcon
                name = 'search'
                style = {styles.searchIcon}
                //iconStyle = {{marginLeft:5}}
                size = {32}
            />
            <Text style={{fontSize:15}}>
                What are you looking for ?
            </Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal
        animationType = "fade"
        transparent = {false}
        visible = {modalVisible}
      >
        <View style = {styles.modal}>
           <View style={styles.view1}>
                <View style={styles.TextInput}>
                    <Animatable.View
                        animation={textInputFocused ? "fadeInRight" : "fadeInLeft"}
                        duration = {400}
                    >
                        <IonicIcon name={ textInputFocused ? "arrow-back" : "search"}
                        onPress = {()=>{
                            if(textInputFocused)
                            setmodalVisible(false)
                            settextInputFocused(true)
                        }}
                        style={styles.icon2}
                        />
                    </Animatable.View>
                    <TextInput
                        style = {{width:"90%"}}
                        placeholder = ""
                        autoFocus = {false}
                        ref = {textInput}

                        onFocus = {()=>{
                            settextInputFocused(true)
                        }}

                        onBlur = {() => {
                            settextInputFocused(false)
                        }}

                        onChangeText = {handleSearch}
                    />
                    <Animatable.View 
                     animation={textInputFocused ? "fadeInLeft" : ""}
                     duration = {400}>
                        <IonicIcon
                            name= {textInputFocused ? "close-circle-sharp" :null}   
                            style = {[{marginRight:-10}, {color: colors.grey3}, styles.icon2]}
                            onPress = {()=> {
                                textInput.current.clear()
                                //handelSearch()
                            }}
                        />
                    </Animatable.View>
                </View>
           </View>
                 <FlatList
                        data={data}
                        renderItem = {({ item }) => (
                            <TouchableOpacity
                                onPress={()=>{

                                    Keyboard.dismiss
                                    navigation.navigate("SearchResultScreen",{item:item.name})
                                    setmodalVisible(false)
                                    settextInputFocused(true)
                                }}>

                                <View style={styles.view2}>
                                    <Text style={{color:colors.grey2, fontSize:15}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                 />
            
        </View>

      </Modal>
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({
    conatainer :{
            flex:1,
    },
    text1:{
        color:colors.grey3,
        fontSize:16
    },
    TextInput:{
        borderWidth:1,
        borderColor:"#86939e",
        borderRadius:12,
        marginHorizontal:0,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10
    },
    SearchArea:{
        // width:"94%",
        marginTop:10,
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:13,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:'row',
        alignItems:'center'
    },
    searchIcon:{
        fontSize:24,
        padding:5,
        color:colors.grey2,
    },
    view1:{
        height:70,
        justifyContent:'center',
        paddingHorizontal:10,
    },
    view2 :{
        flexDirection:'row',
        padding:15,
        color:colors.grey2
    },
    modal:{
        flex:1
    },
    icon2:{
        padding:5,
        color:colors.grey2,fontSize:24,
    }
})