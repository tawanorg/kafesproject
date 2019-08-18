import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';
import NotificationForYouScreen from 'screens/NotificationForYouScreen';
import NotificationFollowingScreen from 'screens/NotificationFollowingScreen';
import TabButtons from 'components/TabButtons';
import HeaderBar from 'components/HeaderBar';

const Tabs = {
  ForYou: 'You',
  Following: 'Following',
};

const NotificationTopNavigator = createMaterialTopTabNavigator(
  {
    ForYou: NotificationForYouScreen,
    Following: NotificationFollowingScreen,
  },
  {
    initialRouteName: 'ForYou',
    tabBarComponent: TabButtons(Tabs),
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
  },
);

NotificationTopNavigator.navigationOptions = {
  header: () => <HeaderBar title="Notification" />,
};

export default NotificationTopNavigator;
