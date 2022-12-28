import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from 'react-native-paper';

const MenuContent = () => {

    const navigation = useNavigation()

    const theme = useTheme()

  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate("Favourites")} } >
      <MaterialCommunityIcon 
         name="star"
         size={35}
        
        style={{color:theme.colors.text}}
        />
        <Text style={[{color:theme.colors.text},styles.text]}>Favourites</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate("About")} }>
      <MaterialCommunityIcon 
         name="information-outline"
         size={35}
         
         style={{color:theme.colors.text}}
        />
        <Text style={[{color:theme.colors.text},styles.text]}>About MarlvelApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}  onPress={() => { navigation.navigate("Contact")} } >
      <MaterialCommunityIcon 
         name="account-box-outline"
         size={35}
        onPress={() => null }
        style={{color:theme.colors.text}}
        />
        <Text style={[{color:theme.colors.text},styles.text]}>Contact</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuContent

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection:"column",
        marginTop:30
    },
    item:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
        marginLeft:20
    },
    text:{
        
       marginLeft: 10 
    },
    
})