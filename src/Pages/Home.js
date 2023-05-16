import {useState, useEffect} from 'react';
import PageWrapper from './PageWrapper';
import axios from 'axios';

function Home() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/auth/login/success`,
          {
            withCredentials: true,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': true,
            },
          }
        );
        console.log(response.data.user);
        if (response.status === 200) {
          setAuthenticated(true);
          setUser(response.data.user);
        } else {
          throw new Error('failed to authenticate user');
        }
      } catch (error) {
        setAuthenticated(false);
        setError('Failed to authenticate user');
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <PageWrapper title="Home">
      <h1>This is Home</h1>
    </PageWrapper>
  );
}

export default Home;
