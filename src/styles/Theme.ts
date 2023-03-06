import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;

    colors: {
      background: string;
      text: string;
      inputBackground: string;
      inputShadow: string;
    };
  }
}

export const light = {
  name: "light-theme",
  colors: {
    background: "#f4f4f4",
    text: "#171717",
    inputBackground: "#e5e5e5",
    inputShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
  },
};

export const dark = {
  name: "dark-theme",
  colors: {
    background: "#171717",
    text: "#f4f4f4",
    inputBackground: "#262626",
    inputShadow: "",
  },
};
