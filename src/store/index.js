import { createStore, combineReducers } from "redux";
import { products } from "./reducer";
const reducer = combineReducers({
  products
});
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
