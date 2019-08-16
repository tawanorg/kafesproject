import React from 'react';
import PropTypes from 'prop-types';
import {Image, View, StyleSheet} from 'react-native';
import StyledText from 'components/StyledText';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

function Card({photoUrl, style}) {
  let {width, height} = style;
  return (
    <View style={[styles.container, style]}>
      <Image
        style={[styles.cover, {width, height}]}
        source={{uri: photoUrl}}
        resizeMode="cover"
      />
    </View>
  );
}

Card.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Card.defaultProps = {
  width: 120,
  height: 90,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
  },
  cover: {
    borderRadius: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: layouts.gutterWidth / 2,
  },
  title: {
    color: '#000',
    fontSize: 16,
  },
});

export default Card;
