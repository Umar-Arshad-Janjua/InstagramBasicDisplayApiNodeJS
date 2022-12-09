import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <>
    
<div style={{'marginTop':'220px'}} className="home_content d-flex justify-content-center" >
  <h1 className='btn btn-primary'>
    <Link className='text-white text-decoration-none fs-1' to ='/displaydata' >Show Instagram DATA</Link>
  </h1>
</div>
    
     
    </>
  )
}

export default Home