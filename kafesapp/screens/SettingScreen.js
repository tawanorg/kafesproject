import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import HeaderBar from 'components/HeaderBar';
import SwitchItem from 'components/SwitchItem';
import StyledText from 'components/StyledText';
import themes from 'theme/themes';
import layouts from 'theme/layouts';

class SettingScreen extends React.Component {
  static navigationOptions = {
    header: () => <HeaderBar showBackButton title="Manage Account Settings" />,
  };

  render() {
    const overrideRenderItem = ({item, index, section: {title, data}}) => (
      <TouchableOpacity style={styles.item}>
        <StyledText>{item}</StyledText>
      </TouchableOpacity>
    );

    return (
      <ScrollView style={styles.container}>
        <SectionList
          renderItem={({item, index, section}) => (
            <View style={styles.item}>
              <SwitchItem title={item} />
            </View>
          )}
          renderSectionHeader={({section: {title, subtitle}}) => (
            <View style={styles.sectionHeader}>
              <StyledText.Bold>{title}</StyledText.Bold>
              {subtitle && <StyledText.Small>{subtitle}</StyledText.Small>}
            </View>
          )}
          sections={[
            {
              title: 'Gernal Options',
              subtitle:
                "Here you'll find information about your account, profile and rights",
              data: ['Edit Profile', 'Change Password'],
              renderItem: overrideRenderItem,
            },
            {
              subtitle:
                'You can manage your security options, and privacy preferences',
              title: 'Privacy Preferences',
              data: [
                'Push/Email Notification',
                'Notify Comment',
                'Notify Following',
              ],
            },
            {
              title: 'About Us',
              subtitle: null,
              data: [
                'Kafes Homepage',
                'Help',
                'Terms and Conditions',
                'Privacy',
              ],
              renderItem: overrideRenderItem,
            },
          ]}
          keyExtractor={(item, index) => item + index}
        />
      </ScrollView>
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
    flex: 1,
  },
  content: {
    padding: layouts.gutterWidth / 2,
  },
  sectionHeader: {
    padding: layouts.gutterWidth / 2,
    backgroundColor: themes.mainSecondBackgroundColor,
    ...borderStyle,
  },
  item: {
    padding: layouts.gutterWidth / 2,
    ...borderStyle,
  },
});

export default SettingScreen;
