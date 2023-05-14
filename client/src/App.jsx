// Injections
import React from 'react'

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'
import Shipping from './components/Shipping'
import Billing from './pages/Billing'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Contact from './pages/Contact'
import Create from './pages/Create'
import { CartProvider } from './helpers/CartContext';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />}/>
      <Route path="create" element={<Create />}/>
      <Route path="/" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
      <Route path="login" element={<Login />} />
      <Route path="checkout" element={<Checkout />}></Route>
      <Route path="shipping" element={<Shipping />}></Route>
      <Route path="billing" element={<Billing />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="forgot" element={<ForgotPassword />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Route>
  ),
);

export default function App() {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </ApolloProvider>
  )
}
