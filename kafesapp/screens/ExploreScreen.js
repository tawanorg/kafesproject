import React, {Fragment} from 'react';
import {
  ScrollView,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import TextHeader from 'components/TextHeader';
import LocationChanger from 'components/LocationChanger';
import SearchBox from 'components/SearchBox';
import StyledText from 'components/StyledText';
import CardBox from 'components/CardBox';
import Card from 'components/Card';
import HighlightCard from 'components/HighlightCard';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

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
    header: () => <TextHeader title="Explore" />,
  };

  handleOnToggleFocus = focused => {
    this.setState({
      isSearchFocus: focused,
    });
  };

  onChangeText = text => {
    let {isSearchFocus} = this.state;
    if (text === '') {
      this.handleOnToggleFocus(false);
    }

    if (!isSearchFocus) {
      this.handleOnToggleFocus(true);
    }

    return false;
  };

  render() {
    const {isSearchFocus} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          <View style={styles.content}>
            <LocationChanger />
          </View>
          <View style={styles.content}>
            <SearchBox
              onFocus={() => this.handleOnToggleFocus(true)}
              onBlur={() => this.handleOnToggleFocus(false)}
              onChangeText={text => this.onChangeText(text)}
            />
          </View>
          {isSearchFocus && (
            <View style={styles.searchContainer}>
              <Image
                source={CafeLocationImg}
                resizeMode="contain"
                style={styles.searchIcon}
              />
              <StyledText.Display>Let's find a cafe</StyledText.Display>
              <StyledText.Bold>
                Search by specific name or place
              </StyledText.Bold>
            </View>
          )}
          {!isSearchFocus && (
            <Fragment>
              <View style={styles.categoryContainer}>
                <View style={[styles.sectionHeader, styles.content]}>
                  <StyledText.Bold>What Is Your Mood Today?</StyledText.Bold>
                </View>
                <FlatList
                  numColumns={3}
                  style={[styles.list]}
                  data={[
                    'Work & Study',
                    'Relax & Peaceful',
                    'Hustle & Meeting',
                    'Trendy & Unique',
                    'Drink & Food',
                    'Quick & Easy',
                  ]}
                  renderItem={({item, index}) => (
                    <TouchableOpacity>
                      <CardBox
                        title={item}
                        photoUrl={`https://source.unsplash.com/200x200/?cafe,${index}`}
                        style={{
                          marginLeft: layouts.gutterWidth / 2,
                          marginBottom: layouts.gutterWidth / 2,
                          width: SIZE.width / 3 - 20,
                          height: SIZE.width / 3 - 20,
                        }}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
              <View style={styles.sectionContainer}>
                <View style={[styles.sectionHeader, styles.content]}>
                  <StyledText.Bold>Recommendations</StyledText.Bold>
                </View>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  style={[styles.list, styles.content]}
                  data={[1, 2, 3, 4]}
                  renderItem={({index}) => (
                    <TouchableOpacity>
                      <Card
                        photoUrl={`https://source.unsplash.com/200x200/?cafe,${index}`}
                        style={{
                          marginBottom: 15,
                        }}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
              <View style={styles.sectionContainer}>
                <View style={[styles.sectionHeader, styles.content]}>
                  <StyledText.Bold>Popular</StyledText.Bold>
                  <StyledText>The top 10 cafes you might like</StyledText>
                </View>
                <FlatList
                  style={styles.list}
                  numColumns={2}
                  data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  renderItem={({index}) => (
                    <TouchableOpacity>
                      <HighlightCard
                        photoUrl={`https://source.unsplash.com/200x200/?cafe,${index}`}
                        style={{
                          marginLeft: layouts.gutterWidth / 2,
                          marginBottom: layouts.gutterWidth / 2,
                          width: SIZE.width / 2 - 25,
                          height: SIZE.width / 2 - 25,
                        }}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
              <View style={styles.sectionContainer}>
                <View style={[styles.sectionHeader, styles.content]}>
                  <StyledText.Bold>More Cafes Around You</StyledText.Bold>
                </View>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  style={[styles.list, styles.content]}
                  data={[1, 2, 3, 4]}
                  renderItem={({index}) => (
                    <TouchableOpacity>
                      <Card
                        photoUrl={`https://source.unsplash.com/200x200/?cafe,${index}`}
                        style={{
                          marginBottom: 15,
                        }}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
            </Fragment>
          )}
        </ScrollView>
      </SafeAreaView>
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
});

export default ExploreScreen;
