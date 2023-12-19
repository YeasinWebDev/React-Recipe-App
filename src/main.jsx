import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import Layout from './Pages/Layout.jsx'
import Home from './Pages/Home.jsx'
import Cuisine from './Pages/Cuisine.jsx'
import SearchItem from './Pages/SearchItem'
import Recipe from './Pages/Recipe'
import LogIn from './Component/LogIn.jsx'
import Layout2 from './Pages/Layout2.jsx'
import AboutUs from './Component/AboutUs.jsx'
import PopularSm from './Component/popularSM.jsx'
import IndianSm from './Component/IndianSm.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/searched/:search' element={<SearchItem />} />
        <Route path='/recipe/:id' element={<Recipe />} />
      </Route>
      <Route>
        <Route path='' element={<Layout2 />}>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/popular' element={<PopularSm/>}/>
          <Route path='/indian' element={<IndianSm/>}/>
        </Route>
      <Route path='/logIn' element={<LogIn />}></Route>
      </Route>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
