import { createGlobalStyle } from 'styled-components'

const cores = {
  branco: '#eee',
  preta: '#111111',
  cinza: '#333',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    paddig: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.preta};
    color: ${cores.branco};
  }
`
