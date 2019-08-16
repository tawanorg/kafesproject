import React from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

class LocationChanger extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Search by name, place or tags"
          placeholderTextColor="#CCCCCC"
          style={styles.input}
          numberOfLines={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: layouts.gutterWidth / 2,
    borderBottomColor: themes.searchBoxBorderBottomColor,
    backgroundColor: themes.searchBoxBackgroundColor,
    borderBottomWidth: 3,
    borderRadius: 4,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    paddingHorizontal: 15,
  },
});

export default LocationChanger;
