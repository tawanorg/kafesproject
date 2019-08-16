import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Header from 'components/Header';
import Avatar from 'components/Avatar';
import layouts from 'theme/layouts';

function HomeHeader() {
  return (
    <Header>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('images/logo.png')}
          resizeMode="contain"
        />
        <Avatar />
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: layouts.gutterWidth / 3,
  },
  logo: {
    width: 90,
    height: 36,
  },
});

export default HomeHeader;
