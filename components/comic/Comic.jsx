import * as React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  },
  image: {
    width: 200,
    height: 300,
  },
  text:{
    width:"80%",
    textAlign:"center"
  }
});

export default function Comic({ name, image }) {
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:image}} />
      <Text style={styles.text}>{name.length > 22 ? name.substring(0,30) + "..." : name}</Text>
    </View>
  );
}
