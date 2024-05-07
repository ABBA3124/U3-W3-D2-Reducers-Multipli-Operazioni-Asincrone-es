import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from 'redux'
import { favouriteReducer } from '../reducers/favouriteReducer'
import { searchResultsReducer } from '../reducers/searchResultsReducer'


import { loadingReducer } from '../reducers/loadingReducer'
import { errorReducer } from '../reducers/errorReducer'

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  searchResults: searchResultsReducer,
  loading: loadingReducer,
  error: errorReducer,
})


const store = configureStore({
  reducer: rootReducer,
})

export default store
