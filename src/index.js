import React, { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ColorModeScript } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { i18nConfig } from './locales'
import * as serviceWorker from './serviceWorker'
import App from './App'
import reportWebVitals from './reportWebVitals'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nConfig)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>

      <ColorModeScript />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
