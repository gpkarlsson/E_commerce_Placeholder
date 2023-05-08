// import Main from './src/main.jsx'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import LoginLayout from './layouts/LoginLayout'
import Dashboard from './pages/Dashboard'
// import Create from './pages/Create'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Login from './pages/Login'


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />}/>
      {/* <Route index element={<Create />}/> */}
      <Route path="profile" element={<Profile />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="login" element={<LoginLayout> <Login /> </LoginLayout>} />
    </Route>
  ),
);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
