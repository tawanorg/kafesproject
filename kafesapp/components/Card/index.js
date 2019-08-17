import React from 'react';
import PropTypes from 'prop-types';
import {Image, View, StyleSheet} from 'react-native';
import StyledText from 'components/StyledText';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

function CardBox({height, width, photoUrl, style}) {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={[styles.cover, {height, width}]}
        source={{uri: photoUrl}}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <StyledText.Bold numberOfLines={2} style={styles.title}>
          Mascot Corner Cafe Bar
        </StyledText.Bold>
        <StyledText>Southbank, VIC</StyledText>
        <StyledText>Best: Internet, Food, Coffee</StyledText>
      </View>
    </View>
  );
}

CardBox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

CardBox.defaultProps = {
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

export default CardBox;
