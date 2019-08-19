import React, {Fragment} from 'react';
import {
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import HeaderBar from 'components/HeaderBar';
import LocationChanger from 'components/LocationChanger';
import SearchBox from 'components/SearchBox';
import StyledText from 'components/StyledText';
import CardBox from 'components/CardBox';
import Card from 'components/Card';
import HighlightCard from 'components/HighlightCard';
import FadeInView from 'components/FadeInView';
import themes from 'theme/themes';
import layouts from 'theme/layouts';
import withChangeLocation from '../hoc/withChangeLocation';

// Images
import CafeLocationImg from 'images/cafe-location.png';

const SIZE = Dimensions.get('screen');

class ExploreScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchFocus: false,
    };
  }

  static navigationOptions = {
    header: () => <HeaderBar title="Explore" />,
  };

  handleOnToggleFocus = focused => {
    this.setState({
      isSearchFocus: focused,
    });
  };

  onChangeText = text => {
    let {isSearchFocus} = this.state;
    // if (text === '') {
    //   this.handleOnToggleFocus(false);
    // }

    if (!isSearchFocus) {
      this.handleOnToggleFocus(true);
    }

    return false;
  };

  render() {
    const {isSearchFocus} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          <View style={styles.content}>
            <LocationChanger
              onPress={() => this.props.navigation.navigate('LocationModal')}
            />
          </View>
          <View style={[styles.inputContainer, styles.content]}>
            <Text>Map</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const borderStyle = {
  borderTopWidth: 0.4,
  borderBottomWidth: 0.4,
  borderColor: themes.mainBorderColor,
};

const containerStyle = {
  marginVertical: layouts.gutterWidth / 2,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: layouts.gutterWidth / 2,
  },
  list: {
    marginTop: layouts.gutterWidth / 2,
    overflow: 'hidden',
  },
  // Section
  sectionHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  categoryContainer: {
    paddingTop: layouts.gutterWidth / 2,
    paddingBottom: 5,
    ...containerStyle,
    ...borderStyle,
  },
  sectionContainer: {
    // ...containerStyle,
  },
  searchContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    paddingVertical: layouts.gutterWidth / 2,
    ...containerStyle,
    ...borderStyle,
    borderBottomWidth: 0,
  },
  searchIcon: {
    marginBottom: 10,
    width: 80,
    height: 80,
    opacity: 0.8,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelButton: {
    marginLeft: 10,
  },
});

export default ExploreScreen;
