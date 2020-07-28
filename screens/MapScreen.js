import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import Colors from '../constants/Colors';



const MapScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Pick a Place</Text>
      <Button
          onPress={() => {
            props.navigation.navigate('StartUp');
            }}
            title="To Startup"
            color={Colors.primary}
            accessibilityLabel="Learn more about this purple button"
          />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MapScreen;
