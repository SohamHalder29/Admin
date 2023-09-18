import React from 'react'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { productInputs, userInputs } from './formSource';
export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/">
<Route index element={<Home/>} />
<Route path="login" element={<Login/>}/>

<Route path="users">
  <Route index element ={<List/>} />
  <Route path=":userId"  element={<Single/>} />
  <Route path="new"  element={<New  inputs={userInputs} title="Add new User" />} />
</Route>
<Route path="products">
  <Route index element ={<List/>} />
  <Route path=":productId"  element={<Single/>} />
  <Route path="new"  element={<New  inputs={productInputs} title="Add new Product" />} />
</Route>
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
