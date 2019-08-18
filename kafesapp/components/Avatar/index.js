import React from 'react';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import layouts from 'theme/layouts';

function Avatar({width, height, navigation}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          height,
          width,
        },
      ]}
      onPress={() => navigation.navigate('MyProfile')}>
      <Image
        resizeMode="contain"
        source={require('images/avatar-default.jpeg')}
        style={{
          width,
          height,
          borderRadius: width / 2,
        }}
      />
    </TouchableOpacity>
  );
}

Avatar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Avatar.defaultProps = {
  width: 36,
  height: 36,
};

const styles = StyleSheet.create({
  container: {},
});

export default withNavigation(Avatar);
