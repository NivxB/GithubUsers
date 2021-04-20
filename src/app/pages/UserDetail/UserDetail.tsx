import { GithubUser } from 'app/components/GithubUser';
import { Layout } from 'app/components/Layout';
import * as React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components/macro';

const GithubWrapper = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #e5e5e5;
`;

const GITHUB_BASE_URL = `https://api.github.com/users/`;

export const UserDetail = () => {
  const [userInfo, setUserInfo] = React.useState<{
    avatar_url: string;
    name: string;
    location: string;
  }>({
    avatar_url: '',
    name: '',
    location: '',
  });
  const history = useHistory();
  const historyState: any = history.location.state;
  console.log();
  React.useEffect(() => {
    const loadData = async () => {
      if (historyState && historyState.user) {
        const res = await fetch(`${GITHUB_BASE_URL}${historyState.user}`);
        const jsonRes = await res.json();
        setUserInfo(jsonRes);
      }
    };
    loadData();
  }, []);

  return (
    <Layout title={'Users'} backButton>
      <GithubWrapper>
        <GithubUser
          imageSrc={userInfo.avatar_url}
          name={userInfo.name}
          location={userInfo.location}
        />
      </GithubWrapper>
    </Layout>
  );
};
