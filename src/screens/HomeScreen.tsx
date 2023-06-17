import {StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
import ScreenWrapper from '../components/primitive/ScreenWrapper';
import TransactionsList from '../components/list/TransactionsList';
import React, {useEffect, useState} from 'react';
import {getDocument} from '../../server';
import useGetSumOfAmountsOfPeriod from '../hooks/useGetSumOfAmountsOfPeriod';

export default function HomeScreen() {
  const [totalSpending, setTotalSpending] = useState(0);
  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getDocument().then(transaction => {
        const expense = useGetSumOfAmountsOfPeriod({
          transaction,
          period: 'week',
        });

        setTotalSpending(expense);
      });
    }

    return () => {
      mounted = false;
      // console.log('unmount');
    };
  }, []);

  return (
    <ScreenWrapper>
      <Header text="Avishek" />
      <Text style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 8}}>
        {`Total Spending: ₹${totalSpending}`}
      </Text>
      <TransactionsList />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
});
