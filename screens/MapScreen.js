import React, { useState, useEffect, useCallback } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
  View,
} from 'react-native';

import MarkerSetup from '../components/MarkerSetup';

const MapScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useState();
  const mapRegion = {
    latitude: 43.830109,
    longitude: 18.344889,
    latitudeDelta: 0.005,
    longitudeDelta: 0.002,
  };

  const selectLocationHandler = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const savedPickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'No location picked',
        'Please pick location prior to saving',
        [{ text: 'OK' }]
      );
      return;
    }
    props.navigation.navigate('NewPlace', { pickedLocation: selectedLocation });
  }, [selectedLocation]);

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={savedPickedLocationHandler}
          style={styles.headerButton}
        >
          <Text style={styles.headerButtonText}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [savedPickedLocationHandler]);

  return (
    <View style={styles.container}>
      <MapView
        region={mapRegion}
        style={styles.mapStyle}
        onPress={selectLocationHandler}
      >
        {markerCoordinates && (
          <Marker
            draggable
            title="Picked Location"
            coordinate={markerCoordinates}
          >
            {/* <View style={{ backgroundColor: 'red', padding: 10 }}>
              <Text>DI</Text>
            </View> */}
          </Marker>
        )}
      </MapView>
      {selectedLocation && (
        <View style={styles.setupContainer}>
          <MarkerSetup />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === 'android' ? 'white' : Colors.primary,
  },
  setupContainer: {
    paddingBottom: 50,
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
  },
});

export default MapScreen;
