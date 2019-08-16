import {Platform} from 'react-native';

export default Platform.select({
  ios: 44,
  android: 56,
  default: 64,
});
