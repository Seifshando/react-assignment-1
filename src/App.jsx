import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Start-Framework';
import About from './components/About/About';
import Contact from './components/Contact.jsx/Contact';
import Child from './components/Child.jsx/Child'
import Portfolio from './components/Portfolio.jsx/Portfolio'
import NotFound from './components/NotFound/NotFound';
import Layout from './components/Layout/Layout';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

let cbr = createBrowserRouter([
  {
    path : '', 
    element:  <Layout />, 
    children :[
      {index: true , element: <Home />},
      {path: 'about' , element: <About />}, 
      {path: 'porfolio' , element: <Portfolio />},
      {path: 'contact' , element: <Contact />},
      {path: '*' , element: <NotFound />}
    ]
  }
])




function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <RouterProvider router={cbr}></RouterProvider>
      {/* <About /> */}
    </>
  );
}

export default App
