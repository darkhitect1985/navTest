export const SET_LOCATIONS = 'SET_LOCATIONS';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';

export const setLocation = (color, title, lng, lat) => {
  return {
    type: SET_LOCATIONS,
    color: color,
    title: title,
    lng: lng,
    lat: lat,
  };
};

export const removeLocation = (item) => {
  return {
    type: REMOVE_LOCATION,
    item: item,
  };
};
