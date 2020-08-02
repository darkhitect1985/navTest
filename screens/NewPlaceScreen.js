import React, { useState, usEffect, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LocationPicker from '../components/LocationPicker';

const NewPlaceScreen = (props) => {
  // const [mapPicked, setMapPicked] = useState('mapPickedLocation');

  // const mapPickedLocation = props.navigation.getParams('pickedLocation');
  // useEffect(() => {
  //   if (mapPickedLocation) {
  //     setMapPicked(mapPickedLocation);
  //   }
  // }, [mapPickedLocation]);

  // useEffect(() => {}, []);

  // if (props.route.params === 'undefined') {
  //   return;
  // } else {
  //   console.log(props.route.params);

  // }

  return (
    <View style={styles.screen}>
      <Text>Pick a Place</Text>
      <LocationPicker navigation={props.navigation} route={props.route} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewPlaceScreen;
