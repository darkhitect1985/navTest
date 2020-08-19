import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../constants/Colors';

import { removeLocation } from '../store/actions/locations'; //redux action

const LocationItem = () => {
  const locations = useSelector((state) => state.locations.locations);

  const dispatch = useDispatch();

  const removeItemHandler = (item) => {
    dispatch(removeLocation(item));
  };

  return (
    <View style={styles.container}>
      {locations.map((loc) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => removeItemHandler(loc)}
        >
          <Text>{loc.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: '80%',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    borderColor: Colors.primary,
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default LocationItem;
