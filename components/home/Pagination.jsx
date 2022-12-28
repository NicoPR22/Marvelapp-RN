import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import { Button, Surface, useTheme } from "react-native-paper";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { searchAllCharacters } from "../../features/charactersSlice";
const Pagination = () => {
  const theme = useTheme();
  const total = useSelector((state) => state.characters.total);
  const page = useSelector((state) => state.characters.page);

  const pages = [];
  for (let i = 0; i < total; i++) {
    pages.push({ number: i + 1, offset: 20 * i });
  }

  const dispatch = useDispatch();

  const handleOnPress = (offset)=> {
   dispatch(searchAllCharacters(offset))
  }

  return total ? (
    <Surface
      elevation={4}
      style={{ height: 65, marginTop: 4, width: "100%", paddingTop: 5 }}
    >
      <FlatList
        horizontal
        data={pages}
        keyExtractor={({ number }) => number.toString()}
        renderItem={({ item }) => (
          <>
            <Button
              style={{ marginLeft: 4, height: 35 }}
              mode={item.number === page ? "contained" : "contained-tonal"}
              compact={true}
              onPress={()=> handleOnPress(item.offset)}
            >
              {item.number}
            </Button>
          </>
        )}
      />
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          marginBottom: 2,
          color: theme.colors.text,
        }}
      >
        <MaterialCommunityIcon name="chevron-left" size={15} />
        Pages
        <MaterialCommunityIcon name="chevron-right" size={15} />
      </Text>
    </Surface>
  ) : null;
};

export default Pagination;

const styles = StyleSheet.create({});
