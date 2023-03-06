import { useState } from "react";
import { useWordStore } from "../../Store/useWordStore";
import { Icon } from "@iconify/react";
import styled, { createGlobalStyle, css, useTheme } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SwitcherBox = styled.div<{ isActive: boolean }>`
  position: relative;
  display: flex;
  border-radius: 100px;
  width: 32px;
  height: 14px;
  padding: 3px;
  background-color: ${(props) => (props.isActive ? "#737373" : "#a3a3a3")};
  cursor: pointer;
  transition: 0.2s background cubic-bezier(1, 0, 0, 1);
`;

const Slider = styled.span<{ isActive: boolean }>`
  position: absolute;
  display: block;
  left: ${(props) => (props.isActive ? "21px" : "3px")};
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: #f4f4f4;
  transition: 0.2s cubic-bezier(1, 0, 0, 1);
`;

export const Switcher = () => {
  const [isActive, setIsActive] = useState(false);
  const switchTheme = useWordStore((state) => state.setTheme);

  const handleClick = () => {
    setIsActive((prev) => !prev);
    switchTheme();
  };

  return (
    <Container>
      <SwitcherBox isActive={isActive} onClick={() => handleClick()}>
        <Slider isActive={isActive} />
      </SwitcherBox>

      <Icon icon="ph:moon-bold" color="#737373" width="24" height="24" />
    </Container>
  );
};
