import React from 'react';
import {createStackNavigator} from 'react-navigation';

import ProfileScreen from 'screens/ProfileScreen';
import SettingScreen from 'screens/SettingScreen';

const UserScreenStack = createStackNavigator(
  {
    MyProfile: createStackNavigator({
      screen: ProfileScreen,
    }),
    MySetting: createStackNavigator({
      screen: SettingScreen,
    }),
  },
  {
    headerMode: 'none',
  },
);

export default UserScreenStack;
