import styled from "styled-components";

import Theme from "../../styles/theme";

export const Content = styled.div`
  margin-bottom: 25px;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  border-radius: 30px;
  background-color: #FFF;
`;

export const Input = styled.input`
  font-family: ${Theme.font.family.regular};
  font-weight: ${Theme.font.weight.regular};
  color: ${Theme.colors.text.black};
  height: 50px;
  flex: 1;
  border-style: none;
  font-size: 14px;
  padding-left: 16px;
  padding-right: 50px;
  border-radius: 30px;
  outline: none;
  width: 100%;
  background-color: transparent;

  &::placeholder {
    color: ${Theme.colors.text.black};
  }
`;

export const Icon = styled.button`
  outline: none;
  border: none;
  position: absolute;
  right: 16px;
  top: 55%;
  transform: translateY(-50%);
 
  background: transparent;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${Theme.colors.text.black};
  padding: 0;
`;

export const Label = styled.label`
  font-family: ${Theme.font.family.regular};
  font-weight: ${Theme.font.weight.semibold};
  font-size: 20px;
  font-weight: 500;
  color: ${Theme.colors.text.white};
`;

