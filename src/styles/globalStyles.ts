import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme"

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
}
`;
