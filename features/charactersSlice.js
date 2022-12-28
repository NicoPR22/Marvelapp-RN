import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiParams from "../config";

const { ts, apikey, hash, baseURL } = apiParams;


const initialState = {
  characters: [],
  page: 1,
  isLoading: false,
  total:0
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    loadCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setPage: (state, action) => {
      state.page = (action.payload/20) + 1
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading
    },
    setTotal: (state, action) => {
      state.total = Math.ceil(action.payload/20)
    }
  },
});

export const { loadCharacters, setPage, setLoading, setTotal } = charactersSlice.actions;

export const selectCharacters = (state) => state.characters.characters;


export const searchAllCharacters = (offSet = 0) => async (dispatch) => {
    axios
      .get(`${baseURL}/v1/public/characters?offset=${offSet}`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => {
        dispatch(loadCharacters(response.data.data.results))
        dispatch(setTotal(response.data.data.total))
        dispatch(setPage(offSet))
        
      })
      .catch((error) => console.log(error))
      
  };

  export const searchCharacter = (search) => async (dispatch) => {
    
     
      axios
        .get(`${baseURL}/v1/public/characters`, {
          params: {
            ts,
            apikey,
            hash,
            nameStartsWith: search,
          },
        })
        .then((response) => {
          dispatch(loadCharacters(response.data.data.results))
          
        })
        .catch((error) => console.error(error))
    
  }

  export default charactersSlice.reducer;