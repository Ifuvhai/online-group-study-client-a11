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
import Details from './pages/Details/Details.jsx'
import UpdateAssignment from './pages/UpdateAssignment/UpdateAssignment.jsx'
import PendingAssignmentsPage from './pages/PendingAssignmentsPage/PendingAssignmentsPage.jsx'
import ThemeProvider from './provider/ThemeProvider/ThemeProvider.jsx'
import ErrorPage from './ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://online-group-study-server-zeta.vercel.app/assignments")
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
        loader: () => fetch("https://online-group-study-server-zeta.vercel.app/assignments")
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
        path: "/pending-assignments",
        element: <PrivateRoute><PendingAssignmentsPage></PendingAssignmentsPage></PrivateRoute>,
        loader: () => fetch("https://online-group-study-server-zeta.vercel.app/submission")
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://online-group-study-server-zeta.vercel.app/assignments/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: ({ params }) => fetch(`https://online-group-study-server-zeta.vercel.app/assignments/${params.id}`)
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
