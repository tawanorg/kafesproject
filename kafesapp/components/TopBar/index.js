import React from 'react';
import {View, StyleSheet} from 'react-native';
import headerHeight from 'utils/headerHeight';

function TopBar() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: headerHeight,
  },
});

export default TopBar;
