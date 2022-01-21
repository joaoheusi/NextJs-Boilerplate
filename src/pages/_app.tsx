import React from 'react'
import { Header } from '../components/Header'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
