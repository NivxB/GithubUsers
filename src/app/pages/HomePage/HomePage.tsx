import { Button } from 'app/components/Button';
import { Layout } from 'app/components/Layout';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

const GITHUB_USERS = [
  'GrahamCampbell',
  'fabpot',
  'weierophinney',
  'rkh',
  'josh',
];

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const ButtonWrapper = styled.div`
  button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export const HomePage = () => {
  const history = useHistory();
  const onClick = user => {
    history.push('/user', {
      user,
    });
  };

  return (
    <>
      <Layout title={'Home'}>
        <HeaderWrapper>
          <h1>Top 5 GitHub Users</h1>
          <span>Tap the username to see more information</span>
        </HeaderWrapper>
        <ButtonWrapper>
          {GITHUB_USERS.map(username => (
            <Button key={username} onClick={() => onClick(username)}>
              {' '}
              {username}{' '}
            </Button>
          ))}
        </ButtonWrapper>
      </Layout>
    </>
  );
};
