import React, {Fragment} from 'react';
import {Animated} from 'react-native';
import DashboardScreen from './DashboardScreen';
import ExploreMapScreen from './ExploreMapScreen';
import HomeHeader from 'components/HomeHeader';
import withPageSwitcher from 'hoc/withPageSwitcher';

class HomeScreen extends React.Component {
  render() {
    const {currentView, defaultView} = this.props;

    return (
      <Fragment>
        <Animated.View style={currentView === 'List' && {flex: 1, opacity: 1}}>
          <DashboardScreen {...this.props} />
        </Animated.View>
        <Animated.View style={currentView === 'Map' && {flex: 1, opacity: 1}}>
          <ExploreMapScreen {...this.props} />
        </Animated.View>
      </Fragment>
    );
  }
}

HomeScreen.navigationOptions = {
  header: () => <HomeHeader />,
};

export default withPageSwitcher(HomeScreen);
