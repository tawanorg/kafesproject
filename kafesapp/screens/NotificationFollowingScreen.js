import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import HeaderBar from 'components/HeaderBar';
import EmptyState from 'components/EmptyState';
import StyledText from 'components/StyledText';
import layouts from 'theme/layouts';

class NotificationFollowingScreen extends React.Component {
  static navigationOptions = {
    header: () => <HeaderBar title="Notification" />,
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
        <EmptyState>
          <StyledText style={styles.emptyText}>
            There is no any messages for you now!
          </StyledText>
        </EmptyState>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    textAlign: 'center',
    lineHeight: 29,
  },
});

export default NotificationFollowingScreen;
