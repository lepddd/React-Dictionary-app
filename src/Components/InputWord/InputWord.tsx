import { useState } from "react";
import { Icon } from "@iconify/react";
import { useWordStore } from "../../Store/useWordStore";
import styled from "styled-components";

const Form = styled.form`
  max-width: 1024px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 40px;
`;

const InputBox = styled.div<{ isFocused: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  border-radius: 24px;
  transition: 0.2s box-shadow ease-in-out;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  box-shadow: ${(props) =>
    props.isFocused ? "rgba(0, 0, 0, 0.15) 0px 2px 8px" : ""};
`;

const Input = styled.input`
  font-size: 1rem;
  font-weight: 500;
  border: none;
  outline: none;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: #a8a29e;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border: none;
`;

export const InputWord = () => {
  const [inputWord, setInputWord] = useState("");
  const [isFocused, setFocused] = useState(false);
  const isLoading = useWordStore((state) => state.isLoading);
  const fetchWordData = useWordStore((state) => state.fetchWordData);

  const searchWord = (word: string, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWordData(word);
    setInputWord("");
  };

  const handleChange = (value: string) => {
    setInputWord(value);
  };

  return (
    <Form onSubmit={(e) => searchWord(inputWord, e)}>
      <InputBox isFocused={isFocused}>
        <Input
          type="text"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Type to search..."
          onChange={(e) => handleChange(e.target.value)}
          value={inputWord}
          required
        />
        <Button disabled={isLoading}>
          <Icon
            icon="ri:search-2-line"
            color="#d946ef"
            width="20"
            height="20"
          />
        </Button>
      </InputBox>
    </Form>
  );
};
