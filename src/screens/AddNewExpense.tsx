import {StyleSheet, Text, View} from 'react-native';
import ScreenWrapper from '../components/primitive/ScreenWrapper';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';

export default function AddNewExpense({sheetId}: SheetProps) {
  return (
    <ActionSheet id={sheetId}>
      <View style={styles.container}>
        <Text>AddNewExpense</Text>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  container: {},
});
