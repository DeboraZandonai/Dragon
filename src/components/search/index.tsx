import { ChangeEvent, forwardRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import * as S from "./styles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  maxLength?: number;
  onSearch: (query: string) => void;
};

const Search = forwardRef<HTMLInputElement, InputProps>(
  ({ maxLength, onSearch, ...props }, ref) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearchQuery(value);
      onSearch(value);
    };

    return (
      <S.Content>
        <S.InputContainer>
          <S.Input
            maxLength={maxLength}
            ref={ref}
            placeholder="Pesquisar"
            type="search"
            onChange={handleChange}
            value={searchQuery}
            {...props}
          />
          <S.Icon onClick={() => onSearch(searchQuery)}>
            <IoSearch color="#fff" />
          </S.Icon>
        </S.InputContainer>
      </S.Content>
    );
  }
);

export default Search;
