import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

import HeaderBar from 'components/HeaderBar';
import Card from 'components/Card';
import StyledText from 'components/StyledText';
import {withNavigation, SafeAreaView} from 'react-navigation';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

class LocationScreen extends React.Component {
  static navigationOptions = {
    header: () => <HeaderBar title="Change Location" />,
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={styles.container}
          contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter cafe name here"
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack(null)}>
              <StyledText.Bold style={styles.cancelButton}>
                Cancel
              </StyledText.Bold>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionHeader}>
            <StyledText.Bold>Found 14 Cafes</StyledText.Bold>
            {/* <StyledText>Current location</StyledText> */}
          </View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            renderItem={({index}) => (
              <Card
                photoUrl={`https://source.unsplash.com/200x200/?cafe,${index}`}
                style={{marginTop: 20}}
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: layouts.gutterWidth / 2,
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
    borderRadius: 30,
    fontSize: 16,
    paddingHorizontal: layouts.gutterWidth / 2,
    paddingVertical: layouts.gutterWidth / 3,
    backgroundColor: themes.mainSecondBackgroundColor,
    borderWidth: 0.5,
    borderColor: themes.mainBorderColor,
    flex: 1,
  },
  cancelButton: {
    marginLeft: 15,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  sectionHeader: {
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
