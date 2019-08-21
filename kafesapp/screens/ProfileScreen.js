import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import HeaderBar from 'components/HeaderBar';
import StyledText from 'components/StyledText';
import Avatar from 'components/Avatar';
import themes from 'theme/themes';
import layouts from 'theme/layouts';
import IconSetting from 'images/icon-menubar.svg';

class ProfileScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: () => (
      <HeaderBar
        title="tawan"
        rightButton={
          <TouchableOpacity
            onPress={() => navigation.navigate('MySetting')}
            style={styles.rightButton}>
            <IconSetting width={32} height={32} fill={themes.mainFontColor} />
          </TouchableOpacity>
        }
      />
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar width={100} height={100} />
          <StyledText.Display style={styles.username}>
            Tim Tawan
          </StyledText.Display>
          <View style={styles.infoContainer}>
            <TouchableOpacity style={[styles.stats, styles.statsActive]}>
              <StyledText.Bold style={styles.textStats}>412</StyledText.Bold>
              <StyledText style={styles.textStats}>Check-Ins</StyledText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.stats}>
              <StyledText.Bold style={styles.textStats}>310</StyledText.Bold>
              <StyledText style={styles.textStats}>Followers</StyledText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.stats}>
              <StyledText.Bold style={styles.textStats}>240</StyledText.Bold>
              <StyledText style={styles.textStats}>Following</StyledText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Header
  header: {
    // backgroundColor: themes.mainSecondBackgroundColor,
    paddingTop: layouts.gutterWidth,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderBottomWidth: 0.4,
    borderColor: themes.mainBorderColor,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stats: {
    justifyContent: 'center',
    flex: 1,
    paddingVertical: layouts.gutterWidth / 3,
    // backgroundColor: themes.mainBackgroundColor,
  },
  statsActive: {
    // backgroundColor: themes.mainSecondBackgroundColor,
  },
  textStats: {
    textAlign: 'center',
  },
  username: {
    paddingVertical: layouts.gutterWidth / 2,
  },
  rightButton: {
    top: 3,
  },
});

export default ProfileScreen;
