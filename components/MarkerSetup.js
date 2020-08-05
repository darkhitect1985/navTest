import React from 'react';
import { View, Text, Picker, TextInput, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const MarkerSetup = (props) => {
  return (
    <View style={styles.container}>
      <Text>Please enter location name and Marker color</Text>
      <View>
        <TextInput
          style={{ ...styles.inputContainer, padding: 10 }}
          onChangeText={(text) => props.onEnteredValue(text)}
          value={props.inputValue}
        />
      </View>
      <View style={styles.inputContainer}>
        <Picker
          selectedValue={props.selectedValue}
          style={styles.pickerStyle}
          onValueChange={(itemValue, itemIndex) =>
            props.onPickerChange(itemValue)
          }
        >
          <Picker.Item label="Black" value="black" />
          <Picker.Item label="Brown" value="brown" />
          <Picker.Item label="Green" value="green" />
          <Picker.Item label="Purple" value="purple" />
          <Picker.Item label="Yellow" value="yellow" />
          <Picker.Item label="Blue" value="blue" />
          <Picker.Item label="Gray" value="gray" />
          <Picker.Item label="Orange" value="orange" />
          <Picker.Item label="Red" value="red" />
          <Picker.Item label="White" value="white" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  pickerStyle: {
    height: '100%',
    width: '100%',
  },
  inputContainer: {
    height: 50,
    width: 300,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default MarkerSetup;
