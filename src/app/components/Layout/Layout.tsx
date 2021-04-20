import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { TopBar } from '../TopBar';

export const StyledDiv = styled.div`
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    padding: 0 70px;
  }
`;

export const Layout = ({ children, title, backButton = false }) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Github Users" />
    </Helmet>
    <TopBar title={title} backButton={backButton} />
    <StyledDiv>{children}</StyledDiv>
  </>
);
