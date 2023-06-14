import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='footer'>
   <div className="container">
    <div className="footer_wrapper">
      <div className="footer-box">
     <div className="logo">
      <div className="logo-img">
        <img src={footer} alt="" />
      </div>
      <h2>Learn Smart</h2>

     </div>
     <p>Embrance the future of innovation and technology with our cutting-edge tech business solution</p>
      </div>
      <div className="footer-box">
<h4 className='footer_title'>Company</h4>
<ul className='footer_links'>
  <li>
  <Link to={'/courses'} href="">our programs</Link>
  </li>
 
<li>
<Link to={'/services'} href="">our plan</Link>
</li>
<li>
<a href="">become a member</a>
</li>
</ul>
      </div>
      <div className="footer-box">
      <h4 className='footer_title'>Quick Links</h4>
<ul className='footer_links'>
<li><Link to={'/about us'} href="">about us</Link></li>
<li><Link to={'/contact'} href="">contact us</Link></li>
<li><a href="">support us</a></li>
</ul>
      </div>



    </div>
   </div>
    </footer>
  )
}

export default Footer
