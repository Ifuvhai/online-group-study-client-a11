import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout.jsx'
import Home from './components/MainLayout/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Assignments from './pages/Assignments/Assignments.jsx'
import CreateAssignment from './pages/CreateAssignment/CreateAssignment.jsx'
import MyAttempt from './pages/MyAttempt/MyAttempt.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>
      },
      {
        path: "/create-assignment",
        element: <CreateAssignment></CreateAssignment>
      },
      {
        path: "/attempted-assignments",
        element: <MyAttempt></MyAttempt>
      },
      {
        path: "*",
        element: <div>error page</div>
      }
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
