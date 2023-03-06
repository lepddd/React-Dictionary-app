import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingMsg = styled.p`
  text-align: center;
  font-size: 1.5rem;
`;

export const LoadingComponent = () => {
  return (
    <Container>
      <LoadingMsg>Loading..</LoadingMsg>
    </Container>
  );
};
