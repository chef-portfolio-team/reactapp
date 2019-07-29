import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILED, ADD_FOOD, ADD_FOOD_SUCCESS, ADD_FOOD_FAILED } from '../Action/Action'

const initialState = {
    foods: [],
    fetchingFood: false,
    addingFood: false,
    error: null,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCHING:
            return {
                ...state,
                fetchingFood: true,
                error: null,
            }
        case FETCHING_SUCCESS:
            
            return {
                ...state,
                fetchingFood: false,
                error: null,
                foods: action.payload,

            }
        case FETCHING_FAILED:
            return {
                ...state,
                fetchingFood: false,
                error: action.payload
            
            }
        default:
            return state
    }
}