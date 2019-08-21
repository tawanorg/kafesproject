import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

// import ExploreMapScreen from 'screens/ExploreMapScreen';
// import DashboardScreen from 'screens/DashboardScreen';
import UserScreen from 'screens/UserScreen';
import NotificationTopNavigator from './NotificationTopNavigator';
import CafeMenuSvg from 'images/menu-cafe';
// import SearchMenuSvg from 'images/menu-search.svg';
// import SearchMenuOutlineSvg from 'images/menu-search-outline.svg';
import NotificationMenuSvg from 'images/menu-notification.svg';
import NotificationOutlineMenuSvg from 'images/menu-notification-outline.svg';
import UserMenuSvg from 'images/menu-user.svg';
import themes from 'theme/themes';
import HomeScreen from 'screens/HomeScreen';

const menuStyles = focused => ({
  width: 30,
  height: 30,
  fill: focused ? themes.highlightText : themes.mainFontColor,
});

const appScreens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: () => null,
      tabBarIcon: ({focused}) => <CafeMenuSvg {...menuStyles(focused)} />,
    },
  },
  // Explore: {
  //   screen: ExploreMapScreen,
  //   navigationOptions: {
  //     tabBarLabel: () => null,
  //     tabBarIcon: ({focused}) =>
  //       focused ? (
  //         <SearchMenuOutlineSvg
  //           {...menuStyles(focused)}
  //           width={32}
  //           height={32}
  //         />
  //       ) : (
  //         <SearchMenuSvg {...menuStyles(focused)} />
  //       ),
  //   },
  // },
  Notification: {
    screen: NotificationTopNavigator,
    navigationOptions: {
      tabBarLabel: () => null,
      tabBarIcon: ({focused}) =>
        focused ? (
          <NotificationMenuSvg {...menuStyles(focused)} />
        ) : (
          <NotificationOutlineMenuSvg {...menuStyles(focused)} />
        ),
    },
  },
  User: {
    screen: UserScreen,
    navigationOptions: {
      tabBarLabel: () => null,
      tabBarIcon: ({focused}) => <UserMenuSvg {...menuStyles(focused)} />,
    },
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

// export default createBottomTabNavigator(createStacks(appScreens), {
//   tabBarComponent: () => <View style={{ zIndex: 1000 }}><Text>test</Text></View>
// });

export default createBottomTabNavigator(createStacks(appScreens));
