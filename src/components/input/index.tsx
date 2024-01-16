import { forwardRef, useState } from "react";
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from "react-icons/md";
import * as S from "./styles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  maxLength?: number;
  placeholder?: string;
  type?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, maxLength, placeholder, type = "text", ...props }, ref) => {
    const [inputType, setInputType] = useState(type === "password" ? "password" : "text");

    const togglePasswordVisibility = () => {
      setInputType(inputType === "password" ? "text" : "password");
    };

    return (
      <S.Content>
        {label && <S.Label>{label}</S.Label>}
        <S.InputContainer>
          <S.Input
            maxLength={maxLength}
            ref={ref}
            placeholder={placeholder}
            type={inputType}
            {...props}
          />
          {type === "password" && (
            <S.Icon onClick={togglePasswordVisibility}>
              {inputType === "password" ? <MdOutlineVisibilityOff /> : <MdOutlineRemoveRedEye />}
            </S.Icon>
          )}
        </S.InputContainer>
      </S.Content>
    );
  }
);

export default Input;
