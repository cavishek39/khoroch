import {Alert, StyleSheet, Text, View} from 'react-native';
import Card from './primitive/Card';
import {Transaction} from '../types/transaction';

interface TransactionProps {
  transaction: Transaction;
}

export default function TransactionCard({transaction}: TransactionProps) {
  return (
    <Card onPress={() => {}}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{transaction.title}</Text>
        <Text style={styles.description}>{transaction.description}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.amount}>{transaction.amount}</Text>
        <Text style={styles.date}>{transaction.date}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#a0a0a0',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#757575',
  },
});
