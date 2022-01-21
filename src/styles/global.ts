import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {

  :root{
    --black: #191B1E;
    --pink: #E74B70;
    --green: #33cc95;
    --blue-dark: #08205E;
    --blue-light: #00ABF2;
    --gray-first: #646669;
    --gray-second: #96989B;
    --gray-third: #C8CACD;
    --gray-light: #EDEFF2;
    --purple: #64376D;
    --white: #FFFFFF;
  }

  margin:0;
  padding:0;
  box-sizing:border-box;

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--black);
    color: var(--pink);
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Lato", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
}


`
