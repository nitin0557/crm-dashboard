// src/styles/globalStyles.tsx
import { css, Global } from "@emotion/react";

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Exo2", sans-serif;
        background: #fff;
        color: #222222;
        line-height: 1;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);
