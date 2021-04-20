import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledBackButton = styled.div`
  position: absolute;
  left: 0;
  button {
    border: none;
    background: none;
    color: white;
    text-transform: uppercase;
    margin-left: 10px;
    @media only screen and (min-width: 768px) {
      margin-left: 70px;
    }
  }
`;

const StyleDiv = styled.div`
  height: 70px;
  background: #282828;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTextWrapper = styled.div`
  color: white;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0px;
`;

export const TopBar = ({ title, backButton = false }) => {
  const history = useHistory();
  return (
    <StyleDiv>
      <StyledBackButton>
        {' '}
        {backButton && (
          <button onClick={() => history.goBack()}>{` < Back`}</button>
        )}{' '}
      </StyledBackButton>
      <StyledTextWrapper>
        <span>{title}</span>
      </StyledTextWrapper>
    </StyleDiv>
  );
};
