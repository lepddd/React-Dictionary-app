import styled from "styled-components";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";

type Props = {
  phonetics: {
    audio: string;
    licence?: {
      name: string;
      url: string;
    };
    sourceUrl?: string;
    text: string;
  }[];
  word: string;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Word = styled.span`
  font-weight: 700;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Phonetic = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
  color: #d946ef;
`;

export const Phonetics = ({ phonetics, word }: Props) => {
  const filtered = phonetics.filter(
    (p: any) => p.text !== undefined && p.audio !== ""
  )[0];
  return (
    <>
      <Wrapper>
        <Word>{word}</Word>
        <Phonetic>{filtered.text}</Phonetic>
      </Wrapper>
      <AudioPlayer src={filtered.audio} />
    </>
  );
};
