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
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'
import Shipping from './components/Shipping'
import Billing from './pages/Billing'
import Confirmation from './pages/Confirmation'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />}/>
      {/* <Route index element={<Create />}/> */}
      <Route path="profile" element={<Profile />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
      <Route path="login" element={<LoginLayout> <Login /> </LoginLayout>} />
      <Route path="checkout" element={<Checkout />}></Route>
      <Route path="shipping" element={<Shipping />}></Route>
      <Route path="billing" element={<Billing />}></Route>
      <Route path="confirmation" element={<Confirmation />}></Route>
    </Route>
  ),
);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
