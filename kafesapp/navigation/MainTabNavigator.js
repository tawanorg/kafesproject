import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import HomeScreen from 'screens/HomeScreen';
import BrowseScreen from 'screens/BrowseScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  // tabBarIcon: ({focused}) => (
  //   <Feather
  //     name="monitor"
  //     size={26}
  //     color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  //   />
  // ),
};

const SearchStack = createStackNavigator({
  Search: BrowseScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  // tabBarIcon: ({focused}) => (
  //   <Feather
  //     name="monitor"
  //     size={26}
  //     color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  //   />
  // ),
};

const NotificationStack = createStackNavigator({
  Notification: HomeScreen,
});

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notification',
  // tabBarIcon: ({focused}) => (
  //   <Feather
  //     name="monitor"
  //     size={26}
  //     color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  //   />
  // ),
};

const SettingStack = createStackNavigator({
  Setting: HomeScreen,
});

SettingStack.navigationOptions = {
  tabBarLabel: 'Setting',
  // tabBarIcon: ({focused}) => (
  //   <Feather
  //     name="monitor"
  //     size={26}
  //     color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  //   />
  // ),
};

export default createBottomTabNavigator({
  HomeStack,
  SearchStack,
  NotificationStack,
  SettingStack,
});
