import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Header from 'components/Header'
import Footer from 'components/Footer'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <Header />
    <Component {...pageProps} />
    <Footer />
  </ThemeProvider>
)

export default App
