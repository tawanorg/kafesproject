import React from 'react';
import {Text, StyleSheet} from 'react-native';
import themes from 'theme/themes';

function StyledText(props) {
  return <Text style={styles.text} {...props} />;
}

StyledText.Bold = ({style, ...props}) => (
  <StyledText style={[styles.bold, style]} {...props} />
);

StyledText.Display = props => <StyledText style={styles.display} {...props} />;

const baseFontStyle = {
  fontSize: 16,
  lineHeight: 24,
  color: themes.mainFontColor,
};

const styles = StyleSheet.create({
  text: {
    ...baseFontStyle,
    fontWeight: '400',
    color: themes.mainFontColor,
  },
  bold: {
    ...baseFontStyle,
    fontWeight: '600',
  },
  display: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '700',
    color: themes.mainFontColor,
  },
});

export default StyledText;
