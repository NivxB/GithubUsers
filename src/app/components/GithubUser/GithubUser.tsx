import * as React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ImageWrapper = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 25px;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    height: 75px;
    width: 75px;
  }
  img {
    width: 100%;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .nameText {
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    @media only screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 21px;
    }
  }
  .locationText {
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    color: #b1b1b1;
    @media only screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 21px;
    }
  }
`;

export const GithubUser = ({ imageSrc, name, location }) => (
  <Wrapper>
    <ImageWrapper>
      <img src={imageSrc}></img>
    </ImageWrapper>
    <TextWrapper>
      <span className="nameText">{name}</span>
      <span className="locationText">{location}</span>
    </TextWrapper>
  </Wrapper>
);
