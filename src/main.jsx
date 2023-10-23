import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Body from './components/Body/Body.jsx'
import './index.css'
import { Route, RouterProvider, createHashRouter, createRoutesFromChildren } from 'react-router-dom'

const router = createHashRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Body/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
