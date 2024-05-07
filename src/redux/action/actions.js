import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from './actionTypes'

export const addToFavourite = (companyName) => ({
  type: ADD_TO_FAVOURITE,
  payload: companyName,
})

export const removeFromFavourite = (companyName) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: companyName,
})