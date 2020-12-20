import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import filterReducer from "./filterReducer";
import pizzaReducer from "./pizzaReducer";

const reducers = combineReducers({
    pizzas: pizzaReducer,
    filters: filterReducer    
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;