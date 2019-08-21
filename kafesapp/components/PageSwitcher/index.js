import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import StyledText from 'components/StyledText';
// import {withNavigation} from 'react-navigation';
import themes from 'theme/themes';
import ListIcon from 'images/icon-list.svg';
import MapIcon from 'images/icon-map.svg';

function PageSwitcher({currentView, onPress}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => onPress('List')}>
          <View style={[styles.item, currentView === 'List' && styles.active]}>
            <ListIcon
              {...iconSize}
              fill={currentView === 'List' ? '#FFFFFF' : themes.mainFontColor}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress('Map')}>
          <View style={[styles.item, currentView === 'Map' && styles.active]}>
            <MapIcon
              {...iconSize}
              fill={currentView === 'Map' ? '#FFFFFF' : themes.mainFontColor}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const iconSize = {
  width: 24,
  height: 24,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 15,
    left: 0,
    right: 0,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#DDD',
  },
  active: {
    backgroundColor: '#E54127',
    color: '#FFFFFF',
  },
});

export default PageSwitcher;
