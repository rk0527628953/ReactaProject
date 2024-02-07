import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AdminPage from './components/admin/AdminPage.jsx'
import AdminHome from './components/admin/AdminHome.jsx'

const routesArray=createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>error page</div>
  },
  {
    path: '/admin',
    element: <AdminPage></AdminPage>,
  },
  {
    path: '/admin/admin_home',
    element: <AdminHome></AdminHome>,

  },
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={routesArray} />
  </React.StrictMode>,
)
