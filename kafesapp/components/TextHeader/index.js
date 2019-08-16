import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from 'components/Header';
import StyledText from 'components/StyledText';

function TextHeader({ title }) {
  return (
    <Header>
      <View style={styles.container}>
        <View style={styles.title}>
          <StyledText.Bold>{title}</StyledText.Bold>
        </View>
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    position: 'relative',
    top: 10,
  }
});

export default TextHeader;
