import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Card, Button, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { deleteFav } from "../../features/favouritesSlice";
import { useDispatch } from "react-redux";

const FavouriteCard = ({ name, image, id}) => {

  const theme = useTheme()
  
  const navigation = useNavigation();

  const dispatch = useDispatch()

  const LeftContent = (props) => (
    <View>
      <Avatar.Image source={{ uri: image }} style={{ marginRight: 10 }} />
    </View>
  );

  const rightContent = (props) => (
    <Button
      mode="outlined"
      icon="delete"
      onPress={() => dispatch(deleteFav(id))}
      compact={true}
      color="red"
      style={{ marginRight: 10 }}
    />
  );

  return (
    <View style={styles.container}>
      <Card
        mode="outlined"
        style={styles.card}
        onPress={() => navigation.navigate(`Detail`, { id: id })}
      >
        <Card.Title
          title={name}
          titleStyle={{ marginLeft: 20 }}
          left={LeftContent}
          right={rightContent}
        />
      </Card>
    </View>
  );
};

export default FavouriteCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    
  },
  card: {
    width: "95%",
    marginVertical: 2,
    display: "flex",
    flexDirection: "row-reverse",
    
  },
});
