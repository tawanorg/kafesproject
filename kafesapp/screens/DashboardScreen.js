import React, {Fragment} from 'react';
import {
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import StyledText from 'components/StyledText';
import HighlightCard from 'components/HighlightCard';
import LocationChanger from 'components/LocationChanger';
import Card from 'components/Card';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

class DashboardScreen extends React.Component {
  render() {
    const {style} = this.props;
    return (
      <View style={[{flex: 1}, style]}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          <View style={styles.content}>
            <LocationChanger />
          </View>
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
                      height: 140,
                    }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.justfForYouContainer}>
            <View style={[styles.sectionHeader, styles.content]}>
              <StyledText.Bold>Just For You</StyledText.Bold>
              {/* <StyledText>We knew you'll like them</StyledText> */}
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
          <View style={styles.furtherAwayContainer}>
            <View style={[styles.sectionAllCafesHeader, styles.content]}>
              <StyledText.Bold>More Cafes</StyledText.Bold>
              <TouchableOpacity>
                <StyledText>Sort by: Recommendation</StyledText>
              </TouchableOpacity>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.list}
              data={[1, 2, 3, 4, 5]}
              renderItem={({index}) => (
                <Card
                  photoUrl={`https://source.unsplash.com/200x200/?cafe,${index}`}
                  style={{
                    marginBottom: 20,
                  }}
                />
              )}
            />
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.mainBackgroundColor,
  },
  popularContainer: {
    paddingVertical: layouts.gutterWidth / 2,
    backgroundColor: themes.mainSecondBackgroundColor,
    ...borderStyle,
  },
  justfForYouContainer: {
    paddingVertical: layouts.gutterWidth / 2,
    ...borderStyle,
  },
  furtherAwayContainer: {
    paddingVertical: layouts.gutterWidth / 2,
  },
  locationContainer: {
    paddingVertical: layouts.gutterWidth / 2,
  },
  content: {
    paddingHorizontal: layouts.gutterWidth / 2,
  },
  list: {
    marginTop: 10,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  changeText: {
    color: themes.highlightText,
  },
  // Section
  sectionHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sectionAllCafesHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default DashboardScreen;
