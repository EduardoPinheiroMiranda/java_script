import React from 'react'
import ReactDOM from 'react-dom/client'
//import {Details} from './pages/Details'
import { ThemeProvider } from 'styled-components'
import Themes from './styles/theme'
import GlobalStyles from './styles/global'

import { Home } from './pages/home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Themes}>
      <GlobalStyles/>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
