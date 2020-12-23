import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from 'redux-thunk';
import filterReducer from "./filterReducer";
import pizzaReducer from "./pizzaReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const reducers = combineReducers({
    pizzas: pizzaReducer,
    filters: filterReducer    
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)));

window.store = store;

export default store;