import styled from 'styled-components';

import Theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Item = styled.button`
  background-color: ${Theme.colors.background.white};
  height: 40px;
  width: 230px;
  padding: 0px 40px;
  border-radius: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0px 10px;
  cursor: pointer;
  border: none;
  border-style: none;
  outline: none;
  font-family: ${Theme.font.family.regular};
  color: ${Theme.colors.text.black};

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Input = styled.input`
  background-color: ${Theme.colors.background.white};
  height: 40px;
  width: 150px;
  padding: 0px 40px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin: 0px 10px;
  border: none;
  border-style: none;
  flex-wrap: wrap;
  outline: none;
  font-family: ${Theme.font.family.regular};
  color: ${Theme.colors.text.black};
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${Theme.colors.background.white};
  width: 230px;
  margin-bottom: 40px;
`;









