import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { LocationsNavigator } from './LocationsNavigator';

const AppNavigator = props => {

  return (
    <NavigationContainer>
      <LocationsNavigator/>
    </NavigationContainer>
  );
};

export default AppNavigator;
