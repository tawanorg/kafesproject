import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import LocationScreen from 'screens/LocationScreen';
import MainTabNavigator from './MainTabNavigator.js';
 
export default createAppContainer(
  createStackNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator,
      LocationModal: LocationScreen,
      // Onboarding: ProfileScreen,
    },
    {
      headerMode: 'none',
      mode: 'modal',
    },
  ),
);
