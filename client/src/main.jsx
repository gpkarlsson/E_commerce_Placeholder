import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

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

// const colors = {
//   brand: {
//     900: "#2D3748",
//     800: "#4A5568",
//     700: "#1A202C",
//     600: "#63B3ED",
//     500: "#E0E0E0",
//     400: "#EDF2F7"
//   }
// }
const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
