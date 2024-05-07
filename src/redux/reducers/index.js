import { combineReducers } from 'redux'
import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from '../action/actionTypes'

const initialState = {
  list: [],
}

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        list: [...state.list, action.payload],
      }
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  favourite: favouriteReducer
})

export default rootReducer