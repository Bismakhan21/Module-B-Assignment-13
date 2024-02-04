import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Order_List from '../pages/Order_List'
import ResponsiveDrawer from '../pages/Layout_1'
import Order_Details from '../pages/Order_Details'
import Customer from '../pages/Customer'
import Analytics from '../pages/Analytics'
import Reviews from '../pages/Reviews'
import Food from '../pages/Food'
import Food_Details from '../pages/Food_Details'
import Customer_Details from '../pages/Customer_Details'
import Calender from '../pages/Calender'
import Chat from '../pages/Chat'
import Wallet from '../pages/Wallet'

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route element={<ResponsiveDrawer />}>
      <Route path="" element={<Dashboard />} />
      <Route  path="orderlist" element={<Order_List />} />
      <Route path='orderdetails' element={<Order_Details />} />
      <Route path='customer' element={<Customer />} /> 
      <Route path='analytics' element={<Analytics />} /> 
      <Route path='reviews' element={<Reviews />} /> 
      <Route path='food' element={<Food />} />
      <Route path='fooddetails' element={<Food_Details />} /> 
      <Route path='customerdetails' element={<Customer_Details />} /> 
      <Route path='calender' element={<Calender />} />
      <Route path='chat' element={<Chat />} />
      <Route path='wallet' element={<Wallet />} />       
    </Route>
    )
)



function Router_App() {
  
    return <RouterProvider router={router} />;
}

export default Router_App