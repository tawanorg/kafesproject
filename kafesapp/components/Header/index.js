import React from 'react';
import {View, StyleSheet} from 'react-native';
import layouts from 'theme/layouts';
import headerHeight from 'utils/headerHeight';
import themes from 'theme/themes';

function Header({children}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: headerHeight,
    backgroundColor: themes.mainBackgroundColor,
    paddingHorizontal: layouts.gutterWidth / 2,
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderColor: themes.mainBorderColor,
    height: headerHeight * 2,
  },
});

export default Header;
