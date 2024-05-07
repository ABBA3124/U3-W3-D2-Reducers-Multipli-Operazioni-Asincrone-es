import { SET_ERROR, CLEAR_ERROR } from '../action/actionTypes'

const initialState = null 

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload // Messaggio di errore
    case CLEAR_ERROR:
      return null
    default:
      return state
  }
}