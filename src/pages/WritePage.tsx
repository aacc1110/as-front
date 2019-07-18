import React from 'react';

import Layout from '../components/Layout';
import WritePostContainer from '../container/write/WritePostContainer';

interface WritePageProps {}

const WritePage: React.FC<WritePageProps> = props => {
  return (
    <Layout>
      <WritePostContainer />
    </Layout>
  );
};

export default WritePage;
