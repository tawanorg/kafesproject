import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

class LocationChanger extends React.Component {
  render() {
    const {onFocus, onBlur, onChangeText, style} = this.props;
    return (
      <View style={[styles.container, style]}>
        <TextInput
          clearButtonMode="always"
          placeholder="Search by cafe shop or place"
          placeholderTextColor="#CCCCCC"
          style={styles.input}
          numberOfLines={1}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

LocationChanger.propTypes = {
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
};

LocationChanger.defaultProps = {
  onFocus: null,
  onChangeText: null,
  onBlur: null,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: layouts.gutterWidth / 3,
    borderColor: themes.searchBoxBorderColor,
    // backgroundColor: themes.searchBoxBackgroundColor,
    borderWidth: 1,
    borderRadius: 30,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    paddingHorizontal: 15,
    fontSize: 18,
  },
});

export default LocationChanger;
