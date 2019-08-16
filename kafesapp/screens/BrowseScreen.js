import React from 'react';
import {
  ScrollView,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import TextHeader from 'components/TextHeader';
import LocationChanger from 'components/LocationChanger';
import SearchBox from 'components/SearchBox';
import StyledText from 'components/StyledText';
import CardBox from 'components/CardBox';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

const SIZE = Dimensions.get('screen');

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: () => <TextHeader title="Explore" />,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          <View style={styles.content}>
            <LocationChanger />
          </View>
          <View style={styles.content}>
            <SearchBox />
          </View>
          <View style={styles.categoryContainer}>
            <View style={[styles.sectionHeader, styles.content]}>
              <StyledText.Bold>Cafe By Moods</StyledText.Bold>
            </View>
            <FlatList
              numColumns={3}
              style={[styles.list]}
              data={[1, 2, 3, 4, 5, 6]}
              renderItem={({index}) => (
                <TouchableOpacity>
                  <CardBox
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
          <View style={styles.recommendationContainer}>
            <View style={[styles.sectionHeader, styles.content]}>
              <StyledText.Bold>Recommendations</StyledText.Bold>
            </View>
          </View>
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
  recommendationContainer: {
    // ...containerStyle,
  },
});

export default HomeScreen;
