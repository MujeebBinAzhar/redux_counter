import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux'

store.subscribe(() => { console.log(store.getState()) })

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

 