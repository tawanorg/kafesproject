import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import DashboardScreen from 'screens/DashboardScreen';
import ExploreScreen from 'screens/ExploreScreen';
import UserScreen from 'screens/UserScreen';
import NotificationTopNavigator from './NotificationTopNavigator';

const appScreens = {
  Home: DashboardScreen,
  Explore: ExploreScreen,
  Notification: NotificationTopNavigator,
  User: {
    screen: UserScreen,
    stackNavigatorConfig: {
      headerMode: 'none',
    },
  },
};

const createStacks = screens => {
  const stacks = [];
  Object.keys(screens).map(key => {
    let screenKey = key;
    let screenComponent = screens[screenKey];
    let allProps = {};
    let allStackNavigatorConfig = {};
    let allNavigationOptions = {
      tabBarLabel: screenKey,
    };

    if (typeof screenComponent === 'object') {
      let {
        screen,
        stackNavigatorConfig,
        navigationOptions,
        ...anotherProps
      } = screens[key];
      allProps = anotherProps;
      allStackNavigatorConfig = stackNavigatorConfig;
      allNavigationOptions = navigationOptions;
      screenComponent = screen;
    }

    stacks[screenKey] = createStackNavigator(
      {
        [screenKey]: screenComponent,
      },
      allStackNavigatorConfig,
    );

    stacks[screenKey].navigationOptions = allNavigationOptions;
    Object.assign({}, stacks[screenKey], {...allProps});
  });
  return stacks;
};

export default createBottomTabNavigator(createStacks(appScreens));
