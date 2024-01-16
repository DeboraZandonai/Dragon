import styled from 'styled-components';
import imageBackground from "../../assets/bg-register.png";
import Theme from '../../styles/theme';

export const Container = styled.div`
  background-image: url(${imageBackground});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  background-color: ${Theme.colors.background.black};
  margin-top: 100px;
  width: 90%;
  height: 100%;
  border-radius: 30px 30px 0px 0px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;

  @media (max-width: 720px) {
    margin-top: 10px;
    img {
      display: none;
    }
  }
  
  @media (max-width: 420px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
`;

export const ContainerTitle = styled.div`
  background-color: ${Theme.colors.background.white};
  max-width: 200px;
  border-radius: 30px;
  height: 50px;
  color: ${Theme.colors.text.black};;
  padding: 0px 40px;
  display: flex;
  align-items: center;

  p {
    font-family: ${Theme.font.family.regular};
    font-size: 22px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${Theme.colors.background.white};
  width: 85%;
  margin: 15px 0px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  grid-auto-columns: 1fr; 
  gap: 16px;
  width: 100%;

  @media (max-width: 850px) {
    grid-auto-flow: row; 
  }
`;










