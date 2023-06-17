import {Transaction} from '../types/transaction';

type Props = {
  transaction: Transaction[];
  period: 'week' | 'month';
};

export default function useGetSumOfAmountsOfPeriod({
  transaction,
  period,
}: Props) {
  const currentDate = new Date();

  const periodDate = new Date();
  // Substracting the period from the current date
  if (period === 'week') {
    periodDate.setDate(currentDate.getDate() - 7);
  } else if (period === 'month') {
    periodDate.setMonth(currentDate.getMonth() - 1);
  }

  const sumOfAmountsOfPeriod = transaction
    .filter(
      transaction =>
        new Date(transaction.date) >= periodDate &&
        new Date(transaction.date) <= currentDate,
    )
    .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

  //   console.log('sumOfAmountsOfPeriod', sumOfAmountsOfPeriod);

  return sumOfAmountsOfPeriod;
}
