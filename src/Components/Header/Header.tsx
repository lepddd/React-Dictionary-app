import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Switcher } from "../Switcher/Switcher";

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1024px;
  min-width: 320px;
  margin: 0 auto;
`;

export const Header = () => {
  return (
    <HeaderBox>
      <Icon icon="ph:book-open-light" color="#737373" width="56" height="56" />
      <Switcher />
    </HeaderBox>
  );
};
