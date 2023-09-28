import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import Themes from './styles/theme'
import GlobalStyles from './styles/global'

import { Routes } from './routers' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {Themes}>
      <GlobalStyles/>
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
)
