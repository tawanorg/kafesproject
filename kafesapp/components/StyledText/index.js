import React from 'react';
import {Text, StyleSheet} from 'react-native';
import themes from 'theme/themes';

function StyledText(props) {
  return <Text style={styles.text} {...props} />;
}

StyledText.Small = ({style, ...props}) => (
  <StyledText style={[styles.small, style]} {...props} />
);

StyledText.Bold = ({style, ...props}) => (
  <StyledText style={[styles.bold, style]} {...props} />
);

StyledText.Display = ({style, ...props}) => (
  <StyledText style={[styles.display, style]} {...props} />
);

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
  small: {
    ...baseFontStyle,
    fontSize: 14,
    fontWeight: '300',
  },
  display: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: themes.mainFontColor,
  },
});

export default StyledText;
