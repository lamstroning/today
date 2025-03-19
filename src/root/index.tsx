import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from './store'
import { UIProvider } from '../components/ui/UIProvider'

const root = createRoot(document.getElementById('root')!)

root.render(
  <Provider store={store}>
    <UIProvider>
      <App />
    </UIProvider>
  </Provider>
)
