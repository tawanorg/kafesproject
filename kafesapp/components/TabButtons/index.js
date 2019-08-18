import React from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import layouts from 'theme/layouts';
import themes from 'theme/themes';
import StyledText from 'components/StyledText';
import LinearGradient from 'react-native-linear-gradient';

const Colors = themes;
const Layout = layouts;

function Menu({tabs, navigation, onPress, index, item}) {
  let currentView = navigation.state.index;
  let currentViewBackground =
    currentView === index
      ? [Colors.mainBrandColor, Colors.mainBrandColor]
      : ['#FFFFFF', '#FFFFFF'];
  return (
    <TouchableOpacity
      key={index}
      style={styles.navigation}
      onPress={() => onPress({index, item})}>
      <StyledText.Bold
        style={[
          styles.navigationText,
          currentView === index && styles.navigationTextActive,
        ]}>
        {tabs[item.key]}
      </StyledText.Bold>
      <View style={styles.activeViewBorder}>
        <LinearGradient
          colors={currentViewBackground}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={styles.gradient}
        />
      </View>
    </TouchableOpacity>
  );
}

/**
 * @param {Object} tabs Object of tab name
 */
function TabButtons(tabs) {
  const MenuWithNavigation = withNavigation(Menu);
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentIndex: 0,
      };

      this.flatListRef = React.createRef();
      this.getItemLayout = this.getItemLayout.bind(this);
      this.scrollToIndex = this.scrollToIndex.bind(this);
      this.onPressTabButton = this.onPressTabButton.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.currentIndex !== nextProps.navigation.state.index) {
        return {
          currentIndex: nextProps.navigation.state.index,
        };
      }

      return null;
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.currentIndex !== this.state.currentIndex) {
        this.scrollToIndex(this.state.currentIndex);
      }
    }

    getItemLayout(data, index) {
      return {length: data.length, index, offset: 33 * index};
    }

    scrollToIndex(index) {
      this.flatListRef.current &&
        this.flatListRef.current.scrollToIndex({animated: true, index});
    }

    onPressTabButton({index, item}) {
      this.props.navigation.navigate(item.key);
      this.scrollToIndex(index);
    }

    render() {
      let {navigation} = this.props;
      let {state} = navigation;
      let routes = state.routes;
      let shouldSlider = routes.length > 2;

      return (
        <View style={[styles.container, !shouldSlider && styles.navigationRow]}>
          {shouldSlider ? (
            <FlatList
              horizontal
              getItemLayout={this.getItemLayout}
              showsHorizontalScrollIndicator={false}
              data={routes}
              ref={ref => (this.flatListRef = ref)}
              keyExtractor={item => item}
              initialScrollIndex={0}
              renderItem={({index, item}, key) => {
                return (
                  <MenuWithNavigation
                    key={key}
                    index={index}
                    item={item}
                    onPress={this.onPressTabButton}
                    tabs={tabs}
                  />
                );
              }}
            />
          ) : (
            routes.map((route, key) => (
              <MenuWithNavigation
                key={key}
                index={key}
                item={route}
                onPress={this.onPressTabButton}
                tabs={tabs}
              />
            ))
          )}
        </View>
      );
    }
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 0.5,
  },
  navigation: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
  navigationRow: {
    flexDirection: 'row',
  },
  navigationText: {
    padding: Layout.gutterWidth / 3,
    color: Colors.mainFontColor,
    textAlign: 'center',
  },
  navigationTextActive: {
    color: Colors.mainBrandColor,
  },
  activeViewBorder: {
    height: 2,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default TabButtons;
