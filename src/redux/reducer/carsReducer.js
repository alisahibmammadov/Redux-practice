import * as type from "../type/car";

const initialState = {
  carsData: [],
  carsBasket: [],
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_CARS:
      return {
        ...state,
        carsData: action.payload,
      };
    case type.ADD_CARS_BASKET: {
      const existingCar = state.carsBasket.find(
        (car) => car.id === action.payload.id
      );
      if (existingCar && existingCar.count) {
        return {
          ...state,
          carsBasket: state.carsBasket.map((car) =>
            car.id === action.payload.id
              ? { ...car, count: car.count + 1 }
              : car
          ),
        };
      } else {
        return {
          ...state,
          carsBasket: [...state.carsBasket, { ...action.payload, count: 1 }],
        };
      }
    }
    case type.INCREMENT:
      return {
        ...state,
        carsBasket: state.carsBasket.map((car) =>
          car.id === action.payload
            ? { ...car, count: car.count < 0 ? 0 : car.count + 1 }
            : car
        ),
      };
    case type.DECREMENT:
      return {
        ...state,
        carsBasket: state.carsBasket.map((car) =>
          car.id === action.payload
            ? { ...car, count: car.count > 1 ? car.count - 1 : 1}
            : car
        ),
      };
      case type.REMOVE:
        return {
          ...state,
          carsBasket:state.carsBasket.filter(car=>car.id !== action.payload) 
        }

    default:
      return state;
  }
};
export default carsReducer;
