import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import StyledText from 'components/StyledText';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

const IMAGES_DATA = [1, 2, 3, 4, 5];

function Card({height, width, photoUrl, style}) {
  return (
    <View style={[styles.container, style]}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={IMAGES_DATA}
        renderItem={({index}) => (
          <TouchableOpacity
            style={{
              marginLeft: index === 0 ? layouts.gutterWidth / 2 : 0,
              marginRight: layouts.gutterWidth / 5,
            }}>
            <Image
              style={[
                {
                  height,
                  width,
                  borderTopLeftRadius: index === 0 ? 4 : 0,
                  borderBottomLeftRadius: index === 0 ? 4 : 0,
                  borderTopRightRadius:
                    IMAGES_DATA.length - 1 === index ? 4 : 0,
                  borderBottomRightRadius:
                    IMAGES_DATA.length - 1 === index ? 4 : 0,
                },
              ]}
              source={{uri: `${photoUrl},${index}`}}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <StyledText.Bold numberOfLines={2} style={styles.title}>
            Mascot Corner Cafe Bar
          </StyledText.Bold>
          <StyledText.Bold style={styles.rateNumber}>4.0</StyledText.Bold>
        </View>
        <View style={styles.category}>
          <StyledText.Small style={styles.categoryItem}>Work & Study</StyledText.Small>
          <StyledText.Small style={styles.categoryItem}>Trendy</StyledText.Small>
        </View>
        <View style={styles.footer}>
          <StyledText.Small>Southbank, VIC</StyledText.Small>
          <StyledText.Small style={styles.dot}>{'\u2B24'}</StyledText.Small>
          <StyledText.Small style={{ color: '#C9B471'}}>CLOSING SOON </StyledText.Small>
        </View>
      </View>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'column',
    paddingHorizontal: layouts.gutterWidth / 2,
    marginTop: 5,
    width: '100%'
  },
  title: {
    color: '#000',
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    paddingVertical: 3,
  },
  footer: {
    flexDirection: 'row',
  },
  rateNumber: {
    backgroundColor: '#F29341',
    // paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 4,
    color: '#FFFFFF',
    position: 'absolute',
    right: 0,
    top: 3,
  },
  dot: {
    fontSize: 2,
    marginHorizontal: layouts.gutterWidth / 3,
  },
  category: {
    flexDirection: 'row',
    paddingVertical: 3,
  },
  categoryItem: {
    backgroundColor: '#EEE',
    marginRight: 5,
    borderRadius: 4,
    paddingHorizontal: 10,
  }
});

export default Card;
