import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import TextHeader from 'components/TextHeader';
// import themes from 'theme/themes';
import layouts from 'theme/layouts';

class NotificationScreen extends React.Component {
  static navigationOptions = {
    header: () => <TextHeader title="Notification" />,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Notification</Text>
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

export default NotificationScreen;
