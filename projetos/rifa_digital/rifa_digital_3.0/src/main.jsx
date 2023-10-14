import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'


import { Sales } from './pages/Sales'
//import { AccessPage } from './pages/accessPage'
//import { RegisterSale } from './pages/RegisterSale'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Sales/>
    </ThemeProvider>
    
  </React.StrictMode>,
)
