import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import HomeScreen from 'screens/HomeScreen';
import ExploreScreen from 'screens/ExploreScreen';
import SettingScreen from 'screens/SettingScreen';
import NotificationTopNavigator from './NotificationTopNavigator';

const appScreens = {
  Home: HomeScreen,
  Explore: ExploreScreen,
  Notification: NotificationTopNavigator,
  Setting: SettingScreen,
};

const createStacks = screens => {
  const stacks = [];
  Object.keys(screens).map(key => {
    let screenKey = key;
    let screenComponent = screens[screenKey];
    let allProps = {};
    let navigationOptions = {
      tabBarLabel: screenKey,
    };

    if (typeof screenComponent === 'object') {
      let {screen, navigationOptions: options, ...anotherProps} = screens[key];
      allProps = anotherProps;
      navigationOptions = options;
      screenComponent = screen;
    }

    stacks[screenKey] = createStackNavigator({
      [screenKey]: screenComponent,
    });

    stacks[screenKey].navigationOptions = navigationOptions;
    Object.assign({}, stacks[screenKey], {...allProps});
  });
  return stacks;
};

export default createBottomTabNavigator(createStacks(appScreens));
