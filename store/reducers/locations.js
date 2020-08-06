import { SET_LOCATIONS } from '../actions/locations';
import Location from '../../models/location';

const initialState = {
  locations: [],
};

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
  }
  return state;
};
