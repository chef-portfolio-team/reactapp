import axios from 'axios'

import { token } from '../token'

export const FETCHING = 'FETCHING'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILED = 'FETCHING_FAILED'

export const ADD_FOOD = 'ADD_FOOD'
export const ADD_FOOD_SUCCESS = 'ADD_FOOD_SUCCESS'
export const ADD_FOOD_FAILED = 'ADD_FOOD_FAILED'

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";


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
    const config = {
      headers: {
        Authorization: window.localStorage.token
      }
    }
    axios
      .post('https://chef-portfolio-webtp6.herokuapp.com/api/posts/', newFood, config)
      .then( () => getFood()(dispatch))
      .catch(err => {
        dispatch({ type: ADD_FOOD_FAILED, payload: err })
      })
} 
  
export const register = creds => dispatch => {
  dispatch({type:REGISTER_START}); 
  return axios.post("https://chef-portfolio-webtp6.herokuapp.com/api/auth/register", creds).then(response => {console.log(response);dispatch({type:REGISTER_SUCCESS});
  return true;
})

  .catch(error => console.log(error.response)); 
}

export const login = creds => dispatch => {
  dispatch({type:LOGIN_START});
  return axios.post("https://chef-portfolio-webtp6.herokuapp.com/api/auth/login", creds).then(response => {localStorage.setItem('token',
  response.data.token);
  dispatch({type:LOGIN_SUCCESS});
  return true;
})

  .catch(error => console.log(error.response)); 
}