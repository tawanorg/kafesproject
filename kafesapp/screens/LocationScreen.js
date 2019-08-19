import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import StyledText from 'components/StyledText';
import {withNavigation} from 'react-navigation';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

const LOCATIONS = [
  'Melbourne, Victoria, Australia',
  'Sydney, NSW, Australia',
  'Docklands, Victoria, Australia',
  'West Melbourne, Victoria, Australia',
  'Carlton, Victoria, Australia',
  'Southbank, Victoria, Australia',
];

class LocationScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.input} placeholder="Enter a town/city" />
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.goBack(null)
              }>
              <StyledText.Bold style={styles.cancelButton}>
                Cancel
              </StyledText.Bold>
            </TouchableOpacity>
          </View>
          <View style={styles.mapContainer}>
            <TouchableOpacity style={styles.locationItem}>
              <StyledText.Bold>Current location</StyledText.Bold>
            </TouchableOpacity>
            <FlatList
              data={LOCATIONS}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.locationItem}>
                  <StyledText>{item}</StyledText>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainerStyle: {
    flexDirection: 'column',
    paddingVertical: layouts.gutterWidth / 2,
  },
  textInputContainer: {
    paddingHorizontal: layouts.gutterWidth / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: layouts.gutterWidth / 2,
    paddingVertical: layouts.gutterWidth / 3,
    backgroundColor: themes.mainSecondBackgroundColor,
    // borderWidth: 1,
    // borderColor: themes.mainBorderColor,
    flex: 1,
  },
  cancelButton: {
    marginLeft: 15,
  },
  mapContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: layouts.gutterWidth / 2,
  },
  locationItem: {
    paddingVertical: layouts.gutterWidth / 2,
    paddingHorizontal: layouts.gutterWidth / 2,
    borderBottomWidth: 0.4,
    borderColor: themes.mainBorderColor,
  },
  locationText: {
    textAlign: 'left',
  },
});

export default withNavigation(LocationScreen);
