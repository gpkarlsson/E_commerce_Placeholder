import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// import './index.css'

const colors = {
  brand: {
    900: "#6A7793",
    800: "#CFD1E0",
    700: "#F9F7FA",
    600: "#D0C9D0",
    500: "#B4A8AA",
    400: "#2A2F3A"
  }
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  //type null not assignable to type element | documentfragment
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
