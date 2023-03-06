import styled from "styled-components";

const Synonym = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  cursor: pointer;
  padding: 0 5px;
  font-weight: 500;
  color: #d946ef;
`;

const Title = styled.span`
  color: #a3a3a3;
  margin-right: 10px;
`;

export const SynonymsList = ({ synonyms }: { synonyms: string[] }) => {
  return (
    <>
      {synonyms.length ? (
        <>
          <Title>Synonyms</Title>
          {synonyms.map((synonym: string, index: number) => (
            <Synonym key={index}>{synonym}</Synonym>
          ))}
        </>
      ) : null}
    </>
  );
};
