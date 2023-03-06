import styled from "styled-components";
import loading from "../../assets/Loading.svg";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const LoadingComponent = () => {
  return (
    <Container>
      <img src={loading} />
    </Container>
  );
};
