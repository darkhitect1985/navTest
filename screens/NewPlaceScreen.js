import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import Colors from '../constants/Colors';



const NewPlaceScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Pick a Place</Text>
      <Button
          onPress={() => {
            props.navigation.navigate('MapScreen');
            }}
            title="To Map"
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

export default NewPlaceScreen;
