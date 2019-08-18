import React from 'react';
import PropTypes from 'prop-types';
import {Switch, View, StyleSheet} from 'react-native';
import StyledText from 'components/StyledText';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

class SwitchItem extends React.Component {
  render() {
    let {title, subtitle} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <StyledText>{title}</StyledText>
          {subtitle && <StyledText.Small>{subtitle}</StyledText.Small>}
        </View>
        <Switch />
      </View>
    );
  }
}

SwitchItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

SwitchItem.defaultProps = {
  title: null,
  subtitle: null,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default SwitchItem;
