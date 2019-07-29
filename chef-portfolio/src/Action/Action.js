import axios from 'axios'

export const FETCHING = 'FETCHING'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILED = 'FETCHING_FAILED'

export const ADD_FOOD = 'ADD_FOOD'
export const ADD_FOOD_SUCCESS = 'ADD_FOOD_SUCCESS'
export const ADD_FOOD_FAILED = 'ADD_FOOD_FAILED'

export const getFood = () => dispatch => {
    dispatch({ type: FETCHING })
    axios
      .get('https://chef-portfolio-webtp6.herokuapp.com/api/posts/all')
      .then(response => {
        dispatch({ type: FETCHING_SUCCESS, payload: response.data})
      })
      .catch(err => {
        dispatch({ type: FETCHING_FAILED, payload: err.response })
      })
}

export const addFood = newFood => dispatch => {
    dispatch({ type: ADD_FOOD })
    axios
      .post('http://localhost:3333/foods', newFood)
      .then(response => {
        dispatch({ type: ADD_FOOD_SUCCESS, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ADD_FOOD_FAILED, payload: err })
      })
  } 