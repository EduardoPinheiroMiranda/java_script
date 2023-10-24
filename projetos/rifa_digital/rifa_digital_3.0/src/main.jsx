import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import { Routers } from './routers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Routers/>
    </ThemeProvider>
    
  </React.StrictMode>,
)
