import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TextHeader from 'components/TextHeader';
import EmptyState from 'components/EmptyState';
import StyledText from 'components/StyledText';
import layouts from 'theme/layouts';

class NotificationForYouScreen extends React.Component {
  static navigationOptions = {
    header: () => <TextHeader title="Notification" />,
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
        <EmptyState>
          <StyledText style={styles.emptyText}>
            There is no any updates for you now!
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

export default NotificationForYouScreen;
