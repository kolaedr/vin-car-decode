import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import './style.css'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { LanguageProvider } from './context/LanguageContext.jsx'

const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: ':vin?', element: <Search /> },
    ],
  },
], { basename: base })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme accentColor="indigo" grayColor="slate" radius="large" scaling="100%" appearance="light">
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </Theme>
  </React.StrictMode>
)


