const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR-CAART';
const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
const MINUS_CART_ITEM = 'MINUS_CART_ITEM';

let initialState = { 
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:{
            const currentPizzaItem = !state.items[action.pizza.id] ? [action.pizza] 
            :[...state.items[action.pizza.id].items, action.pizza];

            const newItems = {
                ...state.items,
                [action.pizza.id]:{
                    items: currentPizzaItem,
                    totalPrice: currentPizzaItem.reduce((sum, obj) => obj.price + sum, 0)
                }
            }
            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], items);
            return{
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: allPizzas.reduce((sum, obj) => obj.price + sum, 0)
            }
        }
        case REMOVE_FROM_CART:
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.id].totalPrice;
            const currentTotalCount = newItems[action.id].items.length;
            delete newItems[action.id]
            return{
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        case CLEAR_CART:
            return{
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0
            }
        case PLUS_CART_ITEM:
            {
                const newObjItems = [
                    ...state.items[action.id].items,
                    state.items[action.id].items[0]
                ];
                const newItems = {
                    ...state.items,
                    [action.id]: {
                      items: newObjItems,
                      totalPrice:  newObjItems.reduce((sum, obj) => obj.price + sum, 0),
                    },
                  };

                const items = Object.values(newItems).map(obj => obj.items)
                const allPizzas = [].concat.apply([], items);
                 
                return{
                    ...state,
                    items: newItems,
                    totalCount: allPizzas.length,
                    totalPrice: allPizzas.reduce((sum, obj) => obj.price + sum, 0)
                }
            }
        case MINUS_CART_ITEM:{
            const oldItems = state.items[action.id].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.id].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.id]: {
                items: newObjItems,
                totalPrice: newObjItems.reduce((sum, obj) => obj.price + sum, 0),
                },
            };
            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], items);

            return{
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: allPizzas.reduce((sum, obj) => obj.price + sum, 0)
            }
        }
        default:
            return state;
    }
}



export const addPizzaToCart = (pizza) => ({
    type: ADD_TO_CART,
    pizza
});

export const clearCart = () => ({
    type: CLEAR_CART
});

export const removeCartItem = (id) => ({
    type: REMOVE_FROM_CART,
    id
});

export const plusItem = (id) => ({
    type: PLUS_CART_ITEM,
    id
});

export const minusItem = (id) => ({
    type: MINUS_CART_ITEM,
    id
});

export default cartReducer;