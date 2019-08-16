import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import layouts from 'theme/layouts';
import themes from 'theme/themes';

function Hero({children}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.mainBackgroundColor,
    padding: layouts.gutterWidth / 2,
  },
});

export default Hero;
