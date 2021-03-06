import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    color: #565656;
  }

  body {
    background: #fff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  html {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  html, body, #root {
    min-height: 100%;
    flex: 1;    
  }
`;

export default GlobalStyle;
