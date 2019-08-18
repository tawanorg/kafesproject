import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import HeaderBar from 'components/HeaderBar';
import StyledText from 'components/StyledText';
// import themes from 'theme/themes';
import layouts from 'theme/layouts';

class ProfileScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: () => (
      <HeaderBar
        title="Tawan"
        rightButton={
          <TouchableOpacity
            onPress={() => navigation.navigate('MySetting')}
            style={styles.title}>
            <StyledText.Bold>Setting</StyledText.Bold>
          </TouchableOpacity>
        }
      />
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>ProfileScreen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: layouts.gutterWidth / 2,
  },
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  headerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  title: {
    top: 10,
  },
});

export default ProfileScreen;
