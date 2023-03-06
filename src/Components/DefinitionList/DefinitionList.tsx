import styled from "styled-components";

type Props = {
  definitions: {
    antonyms: string[];
    definition: string;
    example?: string;
    synonyms: string[];
  }[];
};

const UnorderedList = styled.ul`
  list-style: none;
`;

const List = styled.li`
  &:before {
    content: '\\2022';
    color: #d946ef;
    font-weight: bold;
    display: inline-block;
    width: 1rem;
  }
`;

export const DefinitionList = ({ definitions }: Props) => {
  return (
    <>
      {definitions.map(({ definition }, index: number) => (
        <UnorderedList key={index}>
          <List>{definition}</List>
        </UnorderedList>
      ))}
    </>
  );
};
