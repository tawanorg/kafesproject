import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import Header from 'components/Header';
import StyledText from 'components/StyledText';
// import themes from 'theme/themes';

const HeaderBar = ({title, navigation, showBackButton, rightButton}) => (
  <Header>
    <View style={styles.container}>
      {showBackButton ? (
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
          style={[styles.button, styles.title]}>
          <StyledText.Bold>Back</StyledText.Bold>
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <StyledText.Bold style={[styles.header, styles.title]}>
        {title}
      </StyledText.Bold>
      {rightButton}
    </View>
  </Header>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  button: {
    zIndex: 100,
  },
  title: {
    top: 10,
  },
});

export default withNavigation(HeaderBar);
