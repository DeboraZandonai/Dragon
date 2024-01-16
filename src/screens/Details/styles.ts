import styled from 'styled-components';

import Theme from '../../styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${Theme.colors.background.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ContainerDetail = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;

  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const InputTitle = styled.div`
  border-radius: 30px;
  background-color: ${Theme.colors.background.black};
  height: 45px;
  width: 100%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${Theme.colors.background.white};
    font-family: ${Theme.font.family.regular};
    font-size: 2rem;
    text-align: center;
  }
`;

export const ContainerTopImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
  padding: 0px 30px;

  img {
    margin: 0px 30px;
  }

  div {
    width: 10%;
  }
`;

export const Form = styled.div`
  width: 100%;
  flex-wrap: wrap;

  h1 {
    color: ${Theme.colors.background.black};
    font-family: ${Theme.font.family.regular};
    text-align: center;
    font-size: 50px;
    font-weight: 500;
  }

  h6 {
    color: ${Theme.colors.background.black};
    font-family: ${Theme.font.family.regular};
    font-size: 20px;
    margin: 0px;
    padding-right: 20px;
  }

  p {
    color: ${Theme.colors.background.black};
    font-family: ${Theme.font.family.regular};
    font-size: 18px;
  }
`;

export const ItemForm = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 6px 0px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Line = styled.div`
  background-color: ${Theme.colors.background.black};
  height: 1px;
  width: 100%;
`;


















