import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import ENV from '../env';
import { useSelector } from 'react-redux';

const MapPreview = (props) => {
  const location = useSelector((state) => state.locations.locations);

  let locationString = location.map(
    (loc) => `&markers=color:${loc.color}%7C${loc.locLat},${loc.locLang}`
  );
  let concatenatedLocations = locationString.join('');

  let imagePreviewUrl;

  if (props.location) {
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?size=600x300&maptype=satellite${concatenatedLocations}&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${ENV.googleApiKey}`;
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.mapPreview, ...props.style }}
    >
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
});

export default MapPreview;
