import { createSlice } from "@reduxjs/toolkit";
import { getData, storeData } from "../storageControllers";

const initialState = {
  value: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    loadFavs: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loadFavs } = favouritesSlice.actions;

export const selectFavourites = (state) => state.favourites.value;

export const getFavourites = () => async (dispatch) => {
  const data = await getData();
  dispatch(loadFavs(data));
};

export const resetFavs =
  ({ id, image, name }) =>
  async (dispatch) => {
    let favs = []
    const data = await getData()
    data ? favs = data : null
    favs.push({ id, name, image });
    await storeData(favs);
    dispatch(loadFavs(favs));
  };

export const deleteFav = (id) => async (dispatch) => {
  let data = await getData();
  data = data.filter((e) => e.id !== id);
  await storeData(data);
  dispatch(loadFavs(data));
};

export default favouritesSlice.reducer;
