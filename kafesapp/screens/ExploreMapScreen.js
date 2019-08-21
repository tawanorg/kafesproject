import React, {Fragment} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';
import HeaderBar from 'components/HeaderBar';
import LocationChanger from 'components/LocationChanger';
import MapView from 'react-native-maps';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

class ExploreMapScreen extends React.Component {
  render() {
    const {style} = this.props;
    return (
      <View style={[{flex: 1}, style]}>
        <View style={styles.content}>
          <LocationChanger />
        </View>
        <MapView
          showsUserLocation
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

const borderStyle = {
  borderTopWidth: 0.4,
  borderBottomWidth: 0.4,
  borderColor: themes.mainBorderColor,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: layouts.gutterWidth / 2,
    ...borderStyle,
  },
  map: {
    flex: 1,
  },
});

export default ExploreMapScreen;
