// import Main from './src/main.jsx'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
// import Create from './pages/Create'
import Profile from './pages/Profile'
import Cart from './pages/Cart'


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />}/>
      {/* <Route index element={<Create />}/> */}
      <Route path="profile" element={<Profile />} />
      <Route path="cart" element={<Cart />} /> 
    </Route>

  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
