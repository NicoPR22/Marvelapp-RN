import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Pagination = ({ total, change, page }) => {
  const pages = [];
  for (let i = 0; i < total; i++) {
    pages.push({ number: i + 1, offset: 20 * i });
  }

  return (
    <View style={{ height: 70, marginTop: 4, width: "95%"}}>
      <Text style={{textAlign:'center', fontWeight:'700', marginBottom:2}}>
      <MaterialCommunityIcon
          name="chevron-left"
          color="gray"
          size={15}
        
        />
        Pages 
        <MaterialCommunityIcon
          name="chevron-right"
          color="gray"
          size={15}
         
        />
        </Text>
      <FlatList
        horizontal
        data={pages}
        keyExtractor={({ number }) => number.toString()}
        renderItem={({ item }) => (
          <>
            <Button
              style={{ marginLeft: 4, height:35}}
              mode="contained"
             
              color={ item.offset === page ? 'blue' : 'lightblue'}
              onPress={() => change(item.offset)}
            >
              {item.number}
            </Button>
          </>
        )}
      />
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({});
