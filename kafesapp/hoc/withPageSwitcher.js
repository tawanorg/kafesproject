import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import hoistNonReactStatics from 'hoist-non-react-statics';
import PageSwitcherComponent from 'components/PageSwitcher';

function withChangeLocation(WrappedComponent) {
  class LocationComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentView: 'List',
        defaultView: 'List',
      };
      this.handleOnChangeView = this.handleOnChangeView.bind(this);
    }

    handleOnChangeView(view) {
      this.setState({currentView: view});
    }

    render() {
      return (
        <Fragment>
          <WrappedComponent {...this.props} {...this.state} />
          <PageSwitcherComponent
            currentView={this.state.currentView}
            onPress={this.handleOnChangeView}
          />
        </Fragment>
      );
    }
  }

  hoistNonReactStatics(LocationComponent, WrappedComponent);

  LocationComponent.displayName = `withChangeLocation(${getDisplayName(
    WrappedComponent,
  )})`;

  return LocationComponent;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withChangeLocation;
