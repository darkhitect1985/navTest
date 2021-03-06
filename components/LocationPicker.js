import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Text,
  Alert,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Colors from '../constants/Colors';
import MapPreview from '../components/MapPreview';

const LocationPicker = (props) => {
  const [pickedLocation, setPickedLocation] = useState();
  const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   if (props.route.params?.pickedLocation) {
  //     const mapPickedLocation = props.route.params.pickedLocation;
  //     setPickedLocation(mapPickedLocation);
  //   }
  // }, [props.route.params?.pickedLocation]);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant location permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (error) {
      Alert.alert('Could not fetch location!', 'Please try again', [
        { text: 'OK' },
      ]);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    getLocationHandler();
  }, []);

  const pickOnMapHandler = () => {
    props.navigation.navigate('MapScreen', { currentLocation: pickedLocation });
  };
  return (
    <View style={styles.locationPicker}>
      <MapPreview
        location={pickedLocation}
        style={styles.mapPreview}
        onPress={pickOnMapHandler}
      >
        {isFetching ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>No location chosen yet</Text>
        )}
      </MapPreview>
      <View style={styles.actions}>
        {/* <Button
          title="Get location"
          color={Colors.accent}
          onPress={getLocationHandler}
        /> */}
        <Button
          title="Pick on Map"
          color={Colors.accent}
          onPress={pickOnMapHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: '90%',
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default LocationPicker;
