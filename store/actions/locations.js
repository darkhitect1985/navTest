export const SET_LOCATIONS = 'SET_LOCATIONS';

export const setLocation = (color, title, lng, lat) => {
  return {
    type: SET_LOCATIONS,
    color: color,
    title: title,
    lng: lng,
    lat: lat,
  };
};
