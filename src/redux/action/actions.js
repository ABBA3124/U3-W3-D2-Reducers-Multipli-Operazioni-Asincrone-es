import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SET_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS,
  SET_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
} from "../action/actionTypes"

export const addToFavourite = (companyName) => ({
  type: ADD_TO_FAVOURITE,
  payload: companyName,
})

export const removeFromFavourite = (companyName) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: companyName,
})

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
})

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
})

export const setLoading = (isLoading) => ({
    type: SET_LOADING,
    payload: isLoading,
  })
  
  export const setError = (errorMessage) => ({
    type: SET_ERROR,
    payload: errorMessage,
  })
  
  export const clearError = () => ({
    type: CLEAR_ERROR,
  })


//fetch the search results
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="
export const fetchjobs = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20")
      if (response.ok) {
        const { data } = await response.json()
        console.log("data arriva?", data)
        dispatch(setSearchResults(data))
        dispatch(setLoading(false))
      } else {
        throw new Error('Failed to fetch results')
      }
    } catch (error) {
      console.log("Errore nella fetch", error)
      dispatch(setError(error.message))
      dispatch(setLoading(false))
    }
  }
}

