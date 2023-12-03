import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import carsReducer from "./reducer/carsReducer";

const store = createStore(carsReducer,applyMiddleware(thunk));

export default store;
