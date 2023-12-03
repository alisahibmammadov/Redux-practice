import axios from "axios";
import * as type from "../type/car";

export const getCarsData = (data) => {
  return {
    type: type.GET_CARS,
    payload: data,
  };
};
export const addCarsBasket = (data) => {
  return {
    type: type.ADD_CARS_BASKET,
    payload: data,
  };
};
export const incrementCarsBasket = (id) => {
  return {
    type: type.INCREMENT,
    payload: id,
  };
};
export const decrementCarsBasket = (id) => {
  return {
    type: type.DECREMENT,
    payload: id,
  };
};
export const removeCarsBasket = (id) => {
  return {
    type: type.REMOVE,
    payload: id,
  };
};
export const fetchCarsData = () => {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:3001/cars");
    console.log(data);
    dispatch(getCarsData(data));
  };
};
