import React from 'react'
import Landingpage from './Sigy/pages/landingpage'
import {Routes,Route} from 'react-router-dom'
import Productmenu from './Sigy/components/Productmenu'
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Landingpage />} />
        <Route path='/products/:firmId/:firmname' element = {<Productmenu />} />
      </Routes>
    </div>
  )
}

export default App