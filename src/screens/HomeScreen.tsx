import {StyleSheet} from 'react-native';
import Header from '../components/Header';
import ScreenWrapper from '../components/primitive/ScreenWrapper';
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
