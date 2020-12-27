import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import cart from "./cartReducer";
import filters from "./filterReducer";
import pizzas from "./pizzaReducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const reducers = combineReducers({
    pizzas,
    filters,
    cart  
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

window.store = store;

export default store;