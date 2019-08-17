import React from 'react';
import PropTypes from 'prop-types';
import {Image, View, StyleSheet} from 'react-native';
import StyledText from 'components/StyledText';
import LinearGradient from 'react-native-linear-gradient';

function CardBox({photoUrl, title, style}) {
  let {height, width} = style;
  return (
    <View style={[styles.container, {height, width}, style]}>
      <Image
        style={[styles.cover, {height, width}]}
        source={{uri: photoUrl}}
        resizeMode="cover"
      />
      <StyledText.Bold numberOfLines={2} style={styles.title}>
        {title}
      </StyledText.Bold>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={[styles.linearGradient, {height, width}]}
      />
    </View>
  );
}

CardBox.propTypes = {
  photoUrl: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};

CardBox.defaultProps = {
  photoUrl: null,
  title: 'Title',
  style: null,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    overflow: 'hidden',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  cover: {
    borderRadius: 4,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    color: '#FFFF',
    zIndex: 100,
    paddingVertical: 7,
    paddingHorizontal: 7,
    fontSize: 13,
    textAlign: 'center',
  },
});

export default CardBox;
