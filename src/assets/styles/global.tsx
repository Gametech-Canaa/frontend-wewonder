import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
  --color-background: #F0F0F7;
  --color-primary-lighter: #9871F5;
  --color-primary-light: #916BEA;
  --color-primary: #6842C2;
  --color-primary-dark: #F589CE;
  --color-primary-darker: #6842C2;
  --color-secundary: #F589CE;
  --color-secundary-dark: #F569D4;
  --color-title-in-primary: #FFFFFF;
  --color-text-in-primary: #262626;
  --color-text-title: #32264D;
  --color-text-complement: #000000;
  --color-text-base: #6A6180;
  --color-line-in-white: #E6E6F0;
  --color-input-background: #F8F8FC;
  --color-button-text: #FFFFFF;
  --color-box-base: #FFFFFF;
  --color-box-footer: #FAFAFC;
  font-size: 60%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body, #root {
  height: 100vh;
}
body {
  background: var(--color-background);
}
#root {
  display: flex;
  align-items: center;
  justify-content: center;
}
body,
input,
button,
textarea {
  font: 500 1.6rem Poppins;
  color: var(--color-text-base)
}
.container {
  width: 90vw;
  max-width: 700px;
}
@media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
