import {PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

type CardProps = {
  onPress: () => void;
} & PropsWithChildren;

export default function Card({children, onPress}: CardProps) {
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#e7e6e6',
    elevation: 4,
  },
});
