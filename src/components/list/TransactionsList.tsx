import {FlatList, RefreshControl, Text, View} from 'react-native';
import TransactionCard from '../TransactionCard';
import {getDocument} from '../../../server';
import {Query} from 'appwrite';
import {useEffect, useState} from 'react';
import {Transaction} from '../../types/transaction';
import FloatingButton from '../FloatingButton';

export default function TransactionsList() {
  // TODO: Query transactions from the database

  const [transactions, setTransactions] = useState<Transaction[] | undefined>(
    [],
  );
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    handleRefresh();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    getDocument()
      .then(res => {
        setTransactions(res);
      })
      .catch(err => {
        console.log(err);
        setRefreshing(false);
      })
      .finally(() => {
        setRefreshing(false);
      });
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        extraData={transactions}
        data={transactions}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        renderItem={({item}) => <TransactionCard transaction={item} />}
        keyExtractor={(item, index) =>
          item.id + 'transaction-list' + index?.toString()
        }
        contentContainerStyle={{paddingVertical: 16}}
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
              <Text
                style={{fontSize: 16, fontWeight: 'bold', paddingRight: 10}}>
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
    </View>
  );
}

// create a transactions array with 5 transactions
// const transactions = [
//   {
//     id: '1',
//     title: 'Amazon',
//     description: 'Amazon purchase',
//     amount: '-$100',
//     date: '12/12/2020',
//   },
//   {
//     id: '2',
//     title: 'Amazon',
//     description: 'Amazon purchase',
//     amount: '-$100',
//     date: '12/12/2020',
//   },
//   {
//     id: '3',
//     title: 'Amazon',
//     description: 'Amazon purchase',
//     amount: '-$100',
//     date: '12/12/2020',
//   },
//   {
//     id: '4',
//     title: 'Amazon',
//     description: 'Amazon purchase',
//     amount: '-$100',
//     date: '12/12/2020',
//   },
//   {
//     id: '5',
//     title: 'Amazon',
//     description: 'Amazon purchase',
//     amount: '-$100',
//     date: '12/12/2020',
//   },
//   {
//     id: '6',
//     title: 'Amazon',
//     description: 'Amazon purchase',
//     amount: '-$100',
//     date: '12/12/2020',
//   },
// ];
