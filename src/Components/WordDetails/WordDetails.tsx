import styled from "styled-components";
import { useLayoutEffect, useState } from "react";
import { DefinitionList } from "../DefinitionList/DefinitionList";
import { SynonymsList } from "../SynonymsList/SynonymsList";
import { WordSource } from "../WordSource/WordSource";
import { Phonetics } from "../Phonetics/Phonetics";

type Meaning = {
  antonyms: string[];
  definitions: {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
  }[];
  partOfSpeech: string;
  synonyms: string[];
};

const Container = styled.section`
  padding: 40px;
  max-width: 1024px;
  min-width: 320px;
  margin: 0 auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WordClass = styled.p`
  display: block;
  position: relative;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  width: fit-content;
  padding-right: 30px;
`;

const Box = styled.div`
  position: relative;

  &:after {
    top: calc(50% + 2px);
    right: 0;
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #d1d1d1;
    z-index: -1;
  }
`;

const SubTitle = styled.span`
  color: #a3a3a3;
  margin-right: 10px;
`;

export const WordDetails = ({ result }: any) => {
  const { word, meanings, phonetics, sourceUrls } = result;

  const [phonetic, setPhonetic] = useState({ text: "", audio: "" });

  const getPhonetics = (array: any) => {
    const filtered = array.filter(
      (p: any) => p.text !== undefined && p.audio !== ""
    );

    console.log(filtered[0]);

    setPhonetic(filtered[0]);
  };

  useLayoutEffect(() => {
    getPhonetics(phonetics);
  }, []);

  return (
    <Container>
      <Title>
        <Phonetics phonetics={phonetics} word={word} />
      </Title>

      {meanings.map((meaning: Meaning, index: number) => (
        <div key={index}>
          <Box>
            <WordClass>{meaning.partOfSpeech}</WordClass>
          </Box>
          <SubTitle>Meaning</SubTitle>
          <DefinitionList definitions={meaning.definitions} />
          <SynonymsList synonyms={meaning.synonyms} />
        </div>
      ))}
      <WordSource src={sourceUrls} />
    </Container>
  );
};
