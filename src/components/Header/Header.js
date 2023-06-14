import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  const nav_titles=[{
    path:'/',display:'Home'
  },
  {
    path:'/services',display:'services'
  },
  {
    path:'/courses',display:'Courses'
  },
  {
    path:'/about us',display:'About Us'
  }
]
  return (
    <header className='header'>
<div className='container'>
  <div className='nav_container'>
    <div className='logo'>
<div className="logo-img">
  <img src="https://img.freepik.com/premium-vector/flat-design-concept-small-children-sit-book-using-laptop_18660-490.jpg" alt="" />
</div>
<h2>Learn Smart</h2>
    </div>
    <div className="navigation">
      <ul className='menu'>
{
nav_titles.map((item)=>(
  <li className='nav_item'><Link to={item.path}>{item.display}</Link></li>
))
}

        
       

      </ul>
    </div>
  </div>
</div>
    </header>
  )
}

export default Header
