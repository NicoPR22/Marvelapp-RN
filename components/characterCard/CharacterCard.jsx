import * as React from "react";
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 300,
    height: 300,
    borderRadius:10
  },
});

export default function CharacterCard({ image, name, id }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(`Detail`,{id: id})}
    >
      <Image
        style={styles.logo}
        source={{uri:image}}
      />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}
