import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './features/favouritesSlice'
import charactersReducer from './features/charactersSlice'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  favourites: favouritesReducer,
  characters: charactersReducer,
 
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})