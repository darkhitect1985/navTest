import { SET_LOCATIONS, REMOVE_LOCATION } from '../actions/locations';
import Location from '../../models/location';

const initialState = {
  locations: [],
};

// export const removeItemFromCart = (cartItems, cartItemToRemove) => {
//   const existingCartItem = cartItems.find(
//     cartItem => cartItem.id === cartItemToRemove.id);

//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
//   }

//   return cartItems.map(cartItem =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      const newLocation = new Location(
        new Date().getTime().toString(),
        action.title,
        action.color,
        false,
        action.lng,
        action.lat
      );
      //Location (id, title, color, isCurrent, locLang, locLat)
      return {
        ...state,
        locations: state.locations.concat(newLocation),
      };
    case REMOVE_LOCATION:
      return {
        ...state,
        locations: state.locations.filter((item) => item.id !== action.item.id),
      };
  }
  return state;
};
