import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <section className="topbarsection">
        <div className='companytitle'>
          <Link to='/' className='Link'>
            <h2>SIGY</h2>
          </Link>
        </div>
        <div className='searchbar'>
            <input type="text" placeholder='search...' />
        </div>
        <div className='userauth'>
           <p>Login/Signup</p> 
        </div>
    </section>
  )
}

export default Topbar