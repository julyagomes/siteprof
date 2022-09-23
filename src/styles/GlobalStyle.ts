import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#0038FF",
  primaryLight: "6633CC",
  secondary: "#318E94",
  secondaryLight: "9DC0F4",
  third: "#D8DCFF",
  thirdLight: "#00B2FF",
  white: "#ffffff",
  black: "#000000",
}
