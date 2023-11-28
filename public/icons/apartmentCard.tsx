import { Location } from 'iconsax-react'
import React from 'react'

const ApartmentCard = () => {
  return (
    <div className='card card-apartment'>
      <img src="./images/apt-1.png" alt="apartment" />
      <div className='d-flex justify-content-between mt-3 px-4'><p>2 Bedroom Flat</p>
        <div className='d-flex gap-4'>
          <img src="./icons/share.svg" alt="share" />
          <img src="./icons/chat.svg" alt="chat" />
        </div>
      </div>
      <div className='d-flex mt-3 align-items-center px-4'>
        <p>700,000 <span>P.a</span></p>
        <div className='card-line '/>
        <p>1,100,000 <span>Total Package</span></p>
      </div>

      <div className='d-flex mt-auto mb-4 gap-3 align-items-center px-4'>
        <span className='card-map'>map</span>
        <span className=' card-locate'> '<Location size="15" color="#3D79EF"/>Surulere</span>
      </div>
    </div>
  )
}

export default ApartmentCard