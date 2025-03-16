import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, createSystem, defineConfig } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from './store'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

const system = createSystem(config)
const root = createRoot(document.getElementById('root')!)

root.render(
  <Provider store={store}>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </Provider>
)
