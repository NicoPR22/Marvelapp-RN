import * as React from "react";
import { View } from "react-native";
import CharacterCard from "../characterCard/CharacterCard";
import apiParams from "../../config";
import axios from "axios";
import { ActivityIndicator, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Home(props) {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;
  const [search, setSearch] = React.useState("");
  const [offSet, setOffSet] = React.useState(0)

  const searchAllCharacters = ()=>{
    axios
      .get(`${baseURL}/v1/public/characters?offset=${offSet}`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => setData(response.data.data.results))
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false)
        setSearch("")
      });
  }

  React.useEffect(() => {
    searchAllCharacters()
  }, []);

  function searchCharacter() {
    if(search) {
      setLoading(true);
      axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          nameStartsWith: search
        }
      })
        .then(response => setData(response.data.data.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  }

  return (
    <View style={{ backgroundColor: "green", flex: 1 }}>
      <View>
        <Searchbar
          placeholder="Search for character..."
          onChangeText={(value) => setSearch(value)}
          value={search}
          onIconPress={searchCharacter}
          onSubmitEditing={searchCharacter}
          clearIcon={()=> search? <MaterialCommunityIcon name="broom" size={25} onPress={searchAllCharacters}/> : null}
        />
        {isLoading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <FlatList
            style={{flex: 1}}
            data={data}
            keyExtractor={({ id }) => id.toString()}
            onEndReached={()=>{
              setOffSet(offSet +20)
              searchAllCharacters()
              
            }}
            renderItem={({ item }) => (
              <CharacterCard
                {...props}
                id={item.id}
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                name={item.name}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}
