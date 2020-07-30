import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

import StartupScreen from '../screens/StartupScreen';
import MapScreen from '../screens/MapScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

const LocationsStackNavigator = createStackNavigator();

export const LocationsNavigator = () => {
  return (
    <LocationsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <LocationsStackNavigator.Screen
        name="StartUp"
        component={StartupScreen}
        // options={productsOverviewScreenOptions}
      />
      <LocationsStackNavigator.Screen
        name="MapScreen"
        component={MapScreen}
        // options={productDetailScreenOptions}
      />
      <LocationsStackNavigator.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        // options={cartScreenOptions}
      />
    </LocationsStackNavigator.Navigator>
  );
};

// const AppDrawerNavigator = createDrawerNavigator();

// export const LocationsNavigator = () => {
//   return (
//     <AppDrawerNavigator.Navigator screenOptions={defaultNavOptions}>
//       <AppDrawerNavigator.Screen
//         name="StartUp"
//         component={StartupScreen}
//         // options={productsOverviewScreenOptions}
//       />
//       <AppDrawerNavigator.Screen
//         name="MapScreen"
//         component={MapScreen}
//         // options={productDetailScreenOptions}
//       />
//       <AppDrawerNavigator.Screen
//         name="NewPlace"
//         component={NewPlaceScreen}
//         // options={cartScreenOptions}
//       />
//     </AppDrawerNavigator.Navigator>
//   );
// };,
