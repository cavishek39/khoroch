import {StyleSheet, Text, View} from 'react-native';

export default function Header({text}: {text: string}) {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Hello,</Text>
      <Text style={styles.nameText}>{text ?? 'Avishek'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
  helloText: {fontSize: 20, fontWeight: 'bold'},
  nameText: {fontSize: 36, fontWeight: 'bold'},
});
