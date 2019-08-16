import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import layouts from 'theme/layouts';

function Avatar() {
  return (
    <TouchableOpacity style={styles.container} onPress={() => null}>
      <Image
        resizeMode="contain"
        source={require('images/avatar-default.jpeg')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
  },
});

export default Avatar;
