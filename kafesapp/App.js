import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
