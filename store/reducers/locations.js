import { SET_LOCATIONS } from '../actions/locations';

const initialState = {
  locations: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      return {
        ...state,
        locations: [...state.locations, action.location],
      };
    // case ADD_ORDER:
    //   const newOrder = new Order(
    //     action.orderData.id,
    //     action.orderData.items,
    //     action.orderData.amount,
    //     action.orderData.date
    //   );
    //   return {
    //     ...state,
    //     orders: state.orders.concat(newOrder)
    //   };
  }
  return state;
};
