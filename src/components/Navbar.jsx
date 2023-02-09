import React from 'react'
import '../css/Navbar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faStar } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  return (
    <React.StrictMode>

      <div className='navbar'>
        <select className='navbar__select' name="" id="">
          <option className='navbar__select_option' value="rus">Рязань</option>
          <option value="usa">Сасово</option>
        </select>
        <a className='navbar__a' href="tel: 8 (4912) 505-777"> 8 (4912) 505-777</a>
        <div className="navbar__link">           
          <Link className='navbar__link1' to='/'> <FontAwesomeIcon icon={faStar} /></Link>
          <Link className='navbar__link1' to='/'>Избранное </Link>
          <Link className='navbar__link2' to='/'>Вход</Link>
          <Link className='navbar__link3' to='/'>Регистрация</Link>
        </div>
      </div>

      <div className="nav">
        {/* <FontAwesomeIcon icon={faUserGroup} /> */}
        <h2 className='nav__h2'>Клуб <br />
          Хозмаркет</h2>
      </div>

    </React.StrictMode>
  )
}
export default Navbar