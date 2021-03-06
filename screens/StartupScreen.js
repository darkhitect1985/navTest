import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import Colors from '../constants/Colors';

import LocationItem from '../components/LocationItem';

const StartupScreen = (props) => {
  return (
    <View style={styles.screen}>
      <LocationItem />
      <Button
        onPress={() => {
          props.navigation.navigate('NewPlace');
        }}
        title="New Place"
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
    alignItems: 'center',
  },
});

export default StartupScreen;
