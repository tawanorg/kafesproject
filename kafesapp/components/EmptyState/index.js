import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import photo from 'images/fireworks.png';

const EmptyState = ({children}) => {
  return (
    <View style={styles.container} onPress={() => null}>
      <Image source={photo} style={styles.image} resizeMode="contain" />
      <View style={styles.body}>{children}</View>
    </View>
  );
};

EmptyState.defaultProps = {
  size: 32,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  image: {
    height: 100,
    width: 100,
  },
  body: {
    paddingVertical: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default EmptyState;
