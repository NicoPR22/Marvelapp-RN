import * as React from "react";
import { Text, Image, TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { resetFavs } from "../../features/favouritesSlice";
import { Surface, Modal } from "react-native-paper";

export default function CharacterCard({ image, name, id, isFav }) {
  const [visible, setVisible] = React.useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const nameShort = name.length > 22 ? name.substring(0, 22) + "..." : name;

  const handleOnPress = () => {
    if (!isFav) {
      dispatch(resetFavs({ id, name, image }));
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  };

  return (
    <Surface style={styles.surface} elevation={4}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate(`Detail`, { id: id })}
        >
          <Image style={styles.caracterImage} source={{ uri: image }} />
        </TouchableOpacity>
        <Text style={styles.name}>
          {name.length > 22 ? name.substring(0, 21) + "..." : name}{" "}
        </Text>
        <MaterialCommunityIcon
          name={isFav ? "star" : "star-plus-outline"}
          color="gold"
          size={25}
          style={styles.heart}
          onPress={handleOnPress}
        />

        <Modal
          visible={visible}
          contentContainerStyle={{ width: "95%", height: "20%" }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            Character has been added to your favourites.
          </Text>
        </Modal>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: "95%",
    alignSelf: "center",
    overflow: "hidden",
    backgroundColor: "white",
  },
  container: {
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    width: "100%",
    alignSelf: "center",
    overflow: "hidden",
    backgroundColor: "white",
  },
  name: {
    fontSize: 24,
    display: "flex",
    fontWeight: "bold",
  },
  imageContainer: {
    width: "100%",
    borderBottomWidth:1,
    borderBottomColor:'#ecf5f5'
  },
  caracterImage: {
    width: "100%",
    height: 300,

    resizeMode: "cover",
  },
  heart: {
    display: "flex",
    position: "absolute",
    top: "92%",
    left: "90%",
  },
});
