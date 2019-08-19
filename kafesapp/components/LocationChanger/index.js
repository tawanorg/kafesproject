import React, {Fragment} from 'react';
import {withNavigation} from 'react-navigation';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import StyledText from 'components/StyledText';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

function LocationChanger({onPress}) {
  return (
    <Fragment>
      <View style={styles.container}>
        <StyledText.Bold>Best cafe nearby</StyledText.Bold>
        <View style={styles.wrapper}>
          <StyledText.Display>Melbourne</StyledText.Display>
          <TouchableOpacity onPress={onPress}>
            <StyledText.Bold style={styles.changeText}>Change</StyledText.Bold>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
}

LocationChanger.propTypes = {
  onPress: PropTypes.func,
}

LocationChanger.defaultProps = {
  onPress: null,
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: layouts.gutterWidth / 2,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  changeText: {
    color: themes.highlightText,
  },
});

export default withNavigation(LocationChanger);
