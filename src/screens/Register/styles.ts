import styled from 'styled-components';

import imageBackground from "../../assets/bg-lista.png";
import Theme from '../../styles/theme';

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
  flex: 1;
  background-color: ${Theme.colors.background.black};
  width: 60%;
  border-radius: 30px;
  margin: 8% 0px;

  @media (max-width: 1070px) {
    width: 80%;
  }

  @media (max-width: 560px) {
    width: 90%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;

  h1 {
    font-family: ${Theme.font.family.regular};
    color: ${Theme.colors.background.white};
    font-size: 2.4rem;
    margin: 0px;
  }

  @media (max-width: 560px) {
    width: 85%;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content:  space-between;
  width: 100%;
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${Theme.colors.background.white};
  width: 100%;
  margin: 30px 0px;
`;










