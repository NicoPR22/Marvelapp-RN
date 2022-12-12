import * as React from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import CharacterCard from "../characterCard/CharacterCard";
import apiParams from "../../config";
import axios from "axios";
import { Searchbar } from "react-native-paper";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { getFavourites } from "../../features/favouritesSlice";
import Pagination from "./Pagination";



export default function Home(props) {

  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(getFavourites())
    searchAllCharacters()
  }, []);

  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const { ts, apikey, hash, baseURL } = apiParams;
  const [search, setSearch] = React.useState("");
  const [offSet, setOffSet] = React.useState(0);
  const favourites = useSelector((state)=> state.favourites.value);7

  const searchAllCharacters = () => {
    axios
      .get(`${baseURL}/v1/public/characters?offset=${offSet}`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => {
      setData(response.data.data.results)
      setTotal(response.data.data.total)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
        search ? setSearch("") : null
      });
  };


  function searchCharacter() {
    if (search) {
      setLoading(true);
      axios
        .get(`${baseURL}/v1/public/characters`, {
          params: {
            ts,
            apikey,
            hash,
            nameStartsWith: search,
          },
        })
        .then((response) => setData(response.data.data.results))
        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false)
        });
    }
  }

  const handlePageChange = (number)=> {
      setOffSet(number);
      searchAllCharacters()
  }

  return (
    <View style={{ display: "flex", flex: 1, backgroundColor: "#ecf5f5" }}>
      <View
        style={styles.container}
      >
        <Searchbar
          style={{ width: "95%", backgroundColor: "lightgrey", marginTop:5, height:35, borderRadius: 20}}
          placeholder="Search for character..."
          onChangeText={(value) => setSearch(value)}
          value={search}
          onIconPress={searchCharacter}
          onSubmitEditing={searchCharacter}
          clearIcon={() =>
            search ? (
              <MaterialCommunityIcon
                name="broom"
                size={25}
                onPress={searchAllCharacters}
              />
            ) : null
          }
        />
        {!search ? <Pagination total={total/20} change={handlePageChange} page={offSet} /> : null}
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          style={{ flex: 1, backgroundColor:'#ecf5f5' }}
          data={data}
          keyExtractor={({ id }) => id.toString()}
          refreshing={false}
          renderItem={({ item }) => (
            <>
              <CharacterCard
                {...props}
                key={item.id}
                id={item.id}
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                name={item.name}
                isFav={favourites?.some(f=> f.id === item.id)}
              />
            </>
          )}
        />
      )
      }
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
    marginTop: 5,
  }
});
