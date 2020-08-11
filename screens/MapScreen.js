import React, { useState, useEffect, useCallback } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
  View,
  ActivityIndicator,
} from 'react-native';

import MarkerSetup from '../components/MarkerSetup'; //marker color and name setup

import { setLocation } from '../store/actions/locations'; //redux action
import CombinedMarkers from '../components/CombinedMarkers';

const MapScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [currentMapLocation, setcurrentMapLocation] = useState({
    lat: 37.4218846,
    lng: -122.0837918,
  });
  const [selectedValue, setSelectedValue] = useState('red');
  const [inputValue, setInputValue] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  console.log(selectedLocation + 'DDD');

  const dispatch = useDispatch();

  const location = useSelector((state) => state.locations.locations);

  useEffect(() => {
    if (props.route.params?.currentLocation) {
      const currentMapLocation = props.route.params.currentLocation;
      setcurrentMapLocation(currentMapLocation);
    }
  }, [props.route.params?.currentLocation]);
  //console.log(selectedLocation.lng + ' hhh');

  // useEffect(() => {
  //   if (currentMapLocation === undefined) {
  //     setIsFetching(true);
  //     console.log('undefined');
  //     console.log(isFetching);
  //   } else {
  //     setIsFetching(false);
  //     console.log(currentMapLocation.lng + ' defined');
  //     console.log(isFetching);
  //   }
  // }, [selectedLocation, isFetching]); //testing when location is forwarded

  // useEffect(() => {
  //   console.log(location); //testing state access
  //   console.log(selectedValue); //testing if color is forwarded from child MarkerSetup
  //   console.log(inputValue);
  // }, [location]);
  let focusLocation = currentMapLocation;
  if (selectedLocation) {
    focusLocation = selectedLocation;
  }

  const mapRegion = {
    latitude: focusLocation.lat,
    longitude: focusLocation.lng,
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
    dispatch(
      setLocation(
        selectedValue,
        inputValue,
        selectedLocation.lng,
        selectedLocation.lat
      )
    );
  }, [selectedLocation, dispatch, selectedValue, inputValue]);

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
      {isFetching ? (
        <ActivityIndicator size="large" color={'black'} />
      ) : (
        <View style={styles.container}>
          <MapView
            region={mapRegion}
            style={styles.mapStyle}
            onPress={selectLocationHandler}
          >
            <CombinedMarkers />
            {markerCoordinates && (
              <Marker
                draggable
                title="Picked Location"
                coordinate={markerCoordinates}
              ></Marker>
            )}
            <Marker
              title="Current Location"
              coordinate={{
                latitude: currentMapLocation.lat,
                longitude: currentMapLocation.lng,
              }}
            ></Marker>
          </MapView>
          {selectedLocation && (
            <View style={styles.setupContainer}>
              <MarkerSetup
                inputValue={inputValue}
                selectedValue={selectedValue}
                onPickerChange={(e) => setSelectedValue(e)}
                onEnteredValue={(e) => setInputValue(e)}
              />
            </View>
          )}
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
