import styled from "styled-components";

const Box = styled.div`
  display: flex;
  gap: 20px;
`;

const Title = styled.span`
  font-size: 0.875rem;
  color: #a3a3a3;
  font-style: italic;
`;

const Source = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
`;

export const WordSource = ({ src }: { src: string }) => {
  return (
    <Box>
      <Title>Source</Title>
      <Source href={src}>{src}</Source>
    </Box>
  );
};
