import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import ClubPage from '../../components/ClubPage';

const Club = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({} as Record<string, unknown>);

  useEffect(() => {
    if (id) {
      (async () => {
        const response = await axios.get(
          'https://campuspalsdb.herokuapp.com/clubs'
        );
        setData(
          response.data.find((club) => club.clubName.replaceAll(' ', '') === id)
        );
      })();
    }
  }, [id]);

  return (
    <Layout uniName='ubc'>
      <>
        <ClubPage data={data} />
      </>
    </Layout>
  );
};

export default Club;
