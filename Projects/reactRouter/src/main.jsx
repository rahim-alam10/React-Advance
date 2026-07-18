import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/ContactUs.jsx'
import User from './components/User.jsx'
import Github, { githubProfile } from './components/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="" element={<Home />} ></Route>
      <Route path="about" element={<About />} ></Route>
      <Route path="Contact-Us" element={<Contact />} ></Route>
      <Route path="User/:userid" element={<User />}></Route>
      <Route 
        loader = {githubProfile}
        path="github" 
        element={<Github />}
      ></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
