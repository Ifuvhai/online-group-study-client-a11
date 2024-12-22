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
import AuthProvider from './provider/AuthProvider/AuthProvider.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'

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
        element: <Assignments></Assignments>,
        loader: () => fetch("http://localhost:5000/assignments")
      },
      {
        path: "/create-assignment",
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
      {
        path: "/attempted-assignments",
        element: <PrivateRoute><MyAttempt></MyAttempt></PrivateRoute>
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
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
