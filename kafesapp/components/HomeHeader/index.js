import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import Header from 'components/Header';
import Avatar from 'components/Avatar';
import {withNavigation} from 'react-navigation';
import layouts from 'theme/layouts';
import themes from 'theme/themes';
import SearchMenuSvg from 'images/menu-search.svg';

function HomeHeader({navigation}) {
  return (
    <Header>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('images/logo.png')}
          resizeMode="contain"
        />
        <View style={styles.headerMenu}>
          <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.navigate('SearchModal')}>
            <SearchMenuSvg width={32} height={32} fill={themes.mainFontColor} />
          </TouchableOpacity>
          <Avatar />
        </View>
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
  headerMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.mainSecondBackgroundColor,
  },
});

export default withNavigation(HomeHeader);
