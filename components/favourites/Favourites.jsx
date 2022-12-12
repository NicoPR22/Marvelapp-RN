import { ActivityIndicator, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import FavouriteCard from "./FavouriteCard";
import { useSelector } from "react-redux";

const Favourites = () => {

  const [isLoading, setLoading] = useState(true);
  const favourites = useSelector( (state)=> state.favourites.value );
  
  useEffect(() => {
    setLoading(false);
  },[]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          style={{ flex: 1 }}
          data={favourites}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <FavouriteCard
              key={item.id}
              image={item.image}
              name={item.name}
              id={item.id}
            />
          )}
        />
      )}
    </>
  );
};

export default Favourites;
