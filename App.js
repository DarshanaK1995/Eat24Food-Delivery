import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import RootNavigator from './src/Navigation/RootNavigator'
import { colors } from './src/global/styles'


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
      barStyle = "light-content"
      backgroundColor= {colors.statusbar}/>
     <RootNavigator/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex:1,
  }
})