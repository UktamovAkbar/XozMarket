import React, {FontAwesomeIcon} from 'react'

const Navbar = () => {
  return (
    <React.StrictMode>

      <div className='navbar'>
        <select name="" id="">
          <option value="rus">russin</option>
          <option value="usa">amerika</option>
        </select>
        <a href="tel: 8 (4912) 505-777"> 8 (4912) 505-777</a>

        {/* <FontAwesomeIcon icon="fa-regular fa-star" /> */}
      </div>

    </React.StrictMode>


  )
}
export default Navbar