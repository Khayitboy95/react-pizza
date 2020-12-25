import axios from 'axios';

const SET_PIZZAS = 'SET_PIZZAS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';


let initialState = {
    pizzas: [],
    isLoading: false
}

const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                pizzas: action.pizzas
            }
        case TOGGLE_IS_LOADING:
            return{
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const setPizzas = (pizzas) => ({
    type: SET_PIZZAS,
    pizzas
})
export const toggleIsLoading = (isLoading) => ({
    type: TOGGLE_IS_LOADING,
    isLoading
})

export const getPizzas = (sortBy, category) => { 
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    axios.get(`http://localhost:3003/pizzas?${category !== null ? `category=${category}`: ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
      dispatch(toggleIsLoading(false));
      dispatch(setPizzas(data));
    });
  };
};

export default pizzaReducer;