import React from 'react';
import { View, Text } from 'react-native';
import { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

const CombinedMarkers = (props) => {
  const location = useSelector((state) => state.locations.locations);

  const CustomMarker = (props) => {
    let coord = {
      latitude: props.latitude,
      longitude: props.longitude,
    };
    let color = props.color;
    return (
      <View>
        <Marker draggable title={props.title} coordinate={coord}>
          <View style={{ backgroundColor: color, padding: 5 }}>
            <Text>{props.title}</Text>
          </View>
        </Marker>
      </View>
    );
  };

  return (
    <View>
      {location.map((cartItem) => (
        <CustomMarker
          key={cartItem.id}
          latitude={cartItem.locLat}
          longitude={cartItem.locLang}
          color={cartItem.color}
          title={cartItem.title}
        />
      ))}
    </View>
  );
};

export default CombinedMarkers;
