import { SET_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../action/actionTypes'

const initialState = {
  results: [],
}

export const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload,
      }
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        results: [],
      }
    default:
      return state
  }
}
