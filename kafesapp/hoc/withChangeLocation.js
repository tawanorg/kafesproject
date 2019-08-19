import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import hoistNonReactStatics from 'hoist-non-react-statics';
import LocationScreen from 'screens/LocationScreen';
import themes from 'theme/themes';

const HEIGHT = Dimensions.get('window').height / 1.36;

function withChangeLocation(WrappedComponent) {
  class LocationComponent extends React.Component {
    bottomSheetRef = React.createRef();

    renderInner = () => (
      <View style={[styles.panel, {height: HEIGHT}]}>
        <LocationScreen
          handleOnClose={() => this.bottomSheetRef.current.snapTo(2)}
        />
      </View>
    );

    renderHeader = () => (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );

    render() {
      return (
        <View style={styles.container}>
          <WrappedComponent
            {...this.props}
            onPressButtomSheet={() => this.bottomSheetRef.current.snapTo(0)}
          />
          <BottomSheet
            ref={this.bottomSheetRef}
            snapPoints={[HEIGHT, -50, -50]}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            initialSnap={2}
          />
        </View>
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
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0,0,0,0.2)',
    paddingTop: 20,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: themes.mainSecondBackgroundColor,
    borderBottomWidth: 0,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
    zIndex: 50,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DDDDDD',
    marginBottom: 10,
  },
  panel: {
    backgroundColor: '#FFFFFF',
  },
});

export default withChangeLocation;
