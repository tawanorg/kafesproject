import React, {Fragment} from 'react';
import {Animated} from 'react-native';
import DashboardScreen from './DashboardScreen';
import ExploreMapScreen from './ExploreMapScreen';
import HomeHeader from 'components/HomeHeader';
import withPageSwitcher from 'hoc/withPageSwitcher';

class HomeScreen extends React.Component {
  render() {
    const {currentView, defaultView} = this.props;

    if (currentView !== defaultView) {
      return <ExploreMapScreen {...this.props} />;
    }

    return <DashboardScreen {...this.props} />;
  }
}

HomeScreen.navigationOptions = {
  header: () => <HomeHeader />,
};

export default withPageSwitcher(HomeScreen);
