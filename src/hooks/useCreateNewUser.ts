import {create} from 'react-test-renderer';
import {account} from '../../server';
import {useState} from 'react';

type CreateUserProps = {
  email: string;
  password: string;
};

export default async function useCreateNewUser({
  email,
  password,
}: CreateUserProps) {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  try {
    setLoading(true);
    const createNewUser = await account.createEmailSession(email, password);

    if (!!createNewUser) {
      console.log(createNewUser);
      setUser(createNewUser);
    }
  } catch (error) {
    console.error(error);
    setError(error);
  } finally {
    setLoading(false);
  }

  return {user, error, loading};
}
