import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import NavMenu from './Components/NavMenu/NavMenu'
import Footer from './Components/Footer/Footer'
import './App.css'

export default function App() {

  let router = useRoutes(routes)

  return (
    <div className='App'>
      {router}
    </div>
  )
}
