import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import TextHeader from 'components/TextHeader';
// import themes from 'theme/themes';
import layouts from 'theme/layouts';

class SettingScreen extends React.Component {
  static navigationOptions = {
    header: () => <TextHeader title="SettingScreen" />,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>SettingScreen</Text>
        </View>
      </SafeAreaView>
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
});

export default SettingScreen;
