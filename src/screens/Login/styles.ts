import styled from 'styled-components';

import imageBackground from "../../assets/bg-login.png";

export const Container = styled.div`
  background-image: url(${imageBackground});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  @media (max-width: 900px) {
    width: 70%;
  }
`;





