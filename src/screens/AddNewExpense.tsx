import {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';
import {Transaction} from '../types/transaction';
import {createDocument} from '../../server';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function AddNewExpense({sheetId}: SheetProps) {
  const [transaction, setTransaction] = useState<Transaction>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setTransaction({
      ...transaction,
      date,
    });
    hideDatePicker();
  };

  const addTransaction = () => {
    try {
      if (!transaction?.title || !transaction?.amount || !transaction?.date) {
        Alert.alert('Please fill all the fields');
      } else {
        createDocument(transaction);
        setTransaction(null);
      }
    } catch (e) {
      Alert.alert(e.message);
      return;
    } finally {
      setTransaction(null);
    }
  };

  return (
    <ActionSheet id={sheetId} keyboardHandlerEnabled animated elevation={8}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          value={transaction?.title}
          placeholder="Title"
          onChangeText={val =>
            setTransaction({
              ...transaction,
              title: val,
            })
          }
        />
        <TextInput
          style={styles.inputStyle}
          value={transaction?.description}
          placeholder="Description"
          onChangeText={val =>
            setTransaction({
              ...transaction,
              description: val,
            })
          }
        />
        <TextInput
          style={styles.inputStyle}
          value={transaction?.amount}
          placeholder="Amount"
          onChangeText={val =>
            setTransaction({
              ...transaction,
              amount: val,
            })
          }
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Date"
          onPressIn={showDatePicker}
          value={transaction?.date?.toDateString()}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <TouchableOpacity
          onPress={addTransaction}
          style={{
            margin: 16,
            backgroundColor: 'black',
            padding: 16,
            borderRadius: 8,
            marginVertical: 16,
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  container: {paddingVertical: 16, backgroundColor: 'white'},
  inputStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    fontFamily: 'Montserrat-Regular',
    letterSpacing: 1,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    height: 50,
  },
});
