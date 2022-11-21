import * as React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 50
  },
  image: {
    width: 200,
    height: 300,
  },
});

export default function Comic({ name, image }) {
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:image}} />
      <Text>{name}</Text>
    </View>
  );
}
