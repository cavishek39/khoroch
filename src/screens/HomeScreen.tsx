import {StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
import ScreenWrapper from '../components/primitive/ScreenWrapper';
import Card from '../components/primitive/Card';
import TransactionCard from '../components/TransactionCard';
import TransactionsList from '../components/list/TransactionsList';

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <Header />
      <TransactionsList />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
});
