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
        default:
            return state;
    }
}

export const setPizzas = (pizzas) => ({
    type: SET_PIZZAS,
    pizzas
})


export default pizzaReducer;