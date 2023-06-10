import {FlatList, Text, View} from 'react-native';
import TransactionCard from '../TransactionCard';

export default function TransactionsList() {
  // TODO: Query transactions from the database

  return (
    <FlatList
      data={transactions}
      renderItem={({item}) => <TransactionCard transaction={item} />}
      keyExtractor={(item, index) =>
        item.id + 'transaction-list' + index?.toString()
      }
      ItemSeparatorComponent={() => <View style={{height: 16}} />}
      ListHeaderComponent={() => (
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 8}}>
            Transactions
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', paddingRight: 10}}>
              Today
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500'}}>
              {new Date()?.toDateString()}
            </Text>
          </View>
        </View>
      )}
      ListHeaderComponentStyle={{paddingBottom: 12}}
    />
  );
}

// create a transactions array with 5 transactions
const transactions = [
  {
    id: '1',
    title: 'Amazon',
    description: 'Amazon purchase',
    amount: '-$100',
    date: '12/12/2020',
  },
  {
    id: '2',
    title: 'Amazon',
    description: 'Amazon purchase',
    amount: '-$100',
    date: '12/12/2020',
  },
  {
    id: '3',
    title: 'Amazon',
    description: 'Amazon purchase',
    amount: '-$100',
    date: '12/12/2020',
  },
  {
    id: '4',
    title: 'Amazon',
    description: 'Amazon purchase',
    amount: '-$100',
    date: '12/12/2020',
  },
  {
    id: '5',
    title: 'Amazon',
    description: 'Amazon purchase',
    amount: '-$100',
    date: '12/12/2020',
  },
  {
    id: '6',
    title: 'Amazon',
    description: 'Amazon purchase',
    amount: '-$100',
    date: '12/12/2020',
  },
];
