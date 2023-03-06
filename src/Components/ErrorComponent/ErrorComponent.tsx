import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;
const ErrorTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const ErrorMsg = styled.p`
  font-size: 1rem;
`;

export const ErrorComponent = () => {
  return (
    <Container>
      <ErrorTitle>Sorry!</ErrorTitle>
      <ErrorMsg>Unable to find the typed word.</ErrorMsg>
    </Container>
  );
};
