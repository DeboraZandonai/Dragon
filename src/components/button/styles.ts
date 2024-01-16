import styled, { css } from 'styled-components';
import Theme from '../../styles/theme';

type ButtonVariant = 'outline' | 'fill';

interface ButtonProps {
  variant: ButtonVariant;
}

export const Button = styled.button<ButtonProps>`
font-family: ${Theme.font.family.regular};
  font-weight: ${Theme.font.weight.regular};
  padding: 10px 25px;
  border-radius: 20px;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
  border-style: none;

  ${({ variant }) => variant === 'outline' && css`
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
    background-color: transparent;

    &:hover {
      background-color: #333;
    }
  `}

  ${({ variant }) => variant === 'fill' && css`
    background-color: #fff;
    color: #000;

    &:hover {
      background-color: #f5f5f5;
    }
  `}
`;
