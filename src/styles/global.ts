import { createGlobalStyle, css } from 'styled-components'

export const scrollbarStyle = css`
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.neutralGray};
    border-radius: 4px;
  }
`

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
    }
    html, body, #__next {
        height: 100%;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalStyles
