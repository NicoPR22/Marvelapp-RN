import * as React from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import CharacterCard from "../characterCard/CharacterCard";
import { Searchbar, useTheme } from "react-native-paper";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import {
  getFavourites,
  selectFavourites,
} from "../../features/favouritesSlice";
import Pagination from "./Pagination";
import {
  searchAllCharacters,
  searchCharacter,
} from "../../features/charactersSlice";

export default function Home() {
  const dispatch = useDispatch();

  const theme = useTheme();

  const isLoading = useSelector((state) => state.characters.isLoading);
  const data = useSelector((state) => state.characters.characters);
  const [search, setSearch] = React.useState("");
  const favourites = useSelector((state) => state.favourites.value);

  React.useEffect(() => {
    dispatch(getFavourites());
    dispatch(searchAllCharacters());
  }, []);

  const handleOnPress = ()=> {
    setSearch("") 
    dispatch(searchAllCharacters())
  }

  const handleSearch = ()=> {
    dispatch(searchCharacter(search))
  }

  return (
    <View style={{ display: "flex", flex: 1, marginTop: 5 }}>
      <View style={styles.container}>
        <Searchbar
          style={{ width: "100%" }}
          placeholder="Look for a character..."
          onChangeText={(value) => setSearch(value)}
          value={search}
          onIconPress= {handleSearch}
          onSubmitEditing= {handleSearch}
          clearIcon={() =>
            search ? (
              <MaterialCommunityIcon
                name="broom"
                size={25}
                onPress= {handleOnPress}
                color={theme.colors.text}
              />
            ) : null
          }
        />

        {!search ? <Pagination /> : null}
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          style={{ flex: 1 }}
          data={data}
          keyExtractor={({ id }) => id.toString()}
          refreshing={false}
          renderItem={({ item }) => (
            <>
              <CharacterCard
                key={item.id}
                id={item.id}
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                name={item.name}
                isFav={favourites?.some((f) => f.id === item.id)}
              />
            </>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
});


