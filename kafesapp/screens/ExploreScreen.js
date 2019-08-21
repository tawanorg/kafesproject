import React, {Fragment} from 'react';
import {
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Text
} from 'react-native';
import HomeHeader from 'components/HomeHeader';
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
    header: () => <HomeHeader />,
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
            <SearchBox
              onFocus={() => this.handleOnToggleFocus(true)}
              // onBlur={() => this.handleOnToggleFocus(false)}
              onChangeText={text => this.onChangeText(text)}
              style={{flex: 1}}
            />
            {isSearchFocus && (
              <TouchableOpacity onPress={() => this.handleOnToggleFocus(false)}>
                <StyledText.Bold style={styles.cancelButton}>
                  Cancel
                </StyledText.Bold>
              </TouchableOpacity>
            )}
          </View>
          {isSearchFocus && (
            <FadeInView>
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
            </FadeInView>
          )}
          {!isSearchFocus && (
            <FadeInView>
              {/* <View style={styles.categoryContainer}>
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
                      <Text>Box</Text>
                    </TouchableOpacity>
                  )}
                />
              </View> */}
              <View style={styles.popularContainer}>
                <View style={[styles.sectionHeader, styles.content]}>
                  <StyledText.Bold>Popular</StyledText.Bold>
                  <StyledText>The top 20 cafes you might like</StyledText>
                </View>
                <FlatList
                  style={styles.list}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={[1, 2, 3, 4, 5]}
                  renderItem={({index}) => (
                    <TouchableOpacity>
                      <HighlightCard
                        photoUrl={`https://source.unsplash.com/200x200/?cafe,${index}`}
                        style={{
                          marginLeft: index == 0 && 15,
                          marginRight: 15,
                          width: 120,
                          height: 150,
                        }}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
              <View style={styles.justfForYouContainer}>
                <View style={[styles.sectionHeader, styles.content]}>
                  <StyledText.Bold>Just For You</StyledText.Bold>
                  <StyledText>We knew you'll like them</StyledText>
                </View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.list}
                  data={[1, 2, 3, 4, 5]}
                  renderItem={({index}) => (
                    <TouchableOpacity>
                      <HighlightCard
                        photoUrl={`https://source.unsplash.com/200x200/?cafe,shop,${index}`}
                        style={{
                          marginLeft: index == 0 && 15,
                          marginRight: 15,
                          width: 200,
                          height: 200,
                        }}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
              <View style={styles.sectionContainer}>
                <View style={[styles.sectionHeader, styles.content]}>
                  <StyledText.Bold>Following</StyledText.Bold>
                  <StyledText>People you following</StyledText>
                </View>
                <FlatList
                  style={styles.list}
                  numColumns={2}
                  data={[1, 2, 3, 4, 5, 6]}
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
            </FadeInView>
          )}
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
  popularContainer: {
    marginTop: 15,
    paddingVertical: layouts.gutterWidth / 2,
    backgroundColor: themes.mainSecondBackgroundColor,
    ...borderStyle,
  },
  justfForYouContainer: {
    paddingVertical: layouts.gutterWidth / 2,
    ...borderStyle,
  },
  categoryContainer: {
    paddingTop: layouts.gutterWidth / 2,
    paddingBottom: 5,
    ...containerStyle,
    // ...borderStyle,
  },
  sectionContainer: {
    paddingTop: 15,
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
