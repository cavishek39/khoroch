import {PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';

export default function ScreenWrapper({children}: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    padding: 14,
  },
});
