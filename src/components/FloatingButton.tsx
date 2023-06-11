import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

export default function FloatingButton({onPress}: {onPress: () => void}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.textStyles}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5254ac',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
