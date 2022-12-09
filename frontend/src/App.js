import React from 'react'
import Navbar from './component/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes , Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import DisplayData from './component/DisplayData';




const App = () => {
  return (
    <div className='' style={{ 'backgroundColor':'' , 'fontWeight':'bolder' }}>
      <>
      <Navbar/>
      <Routes>

    <Route exact path='/' element={<Home/>}></Route>
   <Route exact path='/displaydata' element = {<DisplayData/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/signup' element={<Signup/>}></Route>

      </Routes>

      
      </>
    </div>
  )
}

export default App