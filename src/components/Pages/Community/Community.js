import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.png'
function Community() {
    const handleClick = ()=>{
        window.open('','_blank')
    }
  return (
    <div className='container'>
        <div className='start-wrapper'>
            <div className='start-img'>
              <img src={tc} alt="" />  
            </div>
            <div className='start-content'>
                <h2 className='section-title'>Join Our Free Tech community</h2>
                <p>
                    Unlock the power of Knowledge and innovation by joining our vibrant and free Whatsapp Tech Community
                </p>
                <button className='register-btn' onClick={handleClick}>join now</button>
            </div>
        </div>
      
    </div>
  )
}

export default Community
