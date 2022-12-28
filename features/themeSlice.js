import { createSlice } from "@reduxjs/toolkit";
import { getThemeMode, storeThemeMode } from "../storageControllers";

const initialState = {
    isSwitchOn: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    chageSwitch: (state, action) => {
      state.isSwitchOn = action.payload;
    },
  },
});

export const { chageSwitch } = themeSlice.actions;

export const selectTheme = (state) => state.theme.isSwitchOn;

export const getTheme = () => async (dispatch) => {
  const data = await getThemeMode()
  dispatch(chageSwitch(data));
};

export const resetTheme =
  (value) =>
  async (dispatch) => {
    await storeThemeMode(!value)
    dispatch(chageSwitch(!value));
  };

export default themeSlice.reducer;