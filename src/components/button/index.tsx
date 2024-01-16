
import React from "react";
import * as S from "./styles";

type ButtonVariant = 'outline' | 'fill';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant, children, ...props }) => {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  );
  };