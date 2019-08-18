import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import StyledText from 'components/StyledText';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

class LocationChanger extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StyledText.Bold>Best cafe nearby</StyledText.Bold>
        <View style={styles.wrapper}>
          <StyledText.Display>Melbourne, Australia</StyledText.Display>
          <TouchableOpacity onPress={() => null}>
            <StyledText.Bold style={styles.changeText}>Change</StyledText.Bold>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: layouts.gutterWidth / 2,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  changeText: {
    color: themes.highlightText,
  },
});

export default LocationChanger;
