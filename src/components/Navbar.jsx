import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faStar } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <select className="navbar__select" name="" id="">
          <option className="navbar__select_option" value="rus">
            Рязань
          </option>
          <option value="usa">Сасово</option>
        </select>
        <a className="navbar__a" href="tel: 8 (4912) 505-777">
          {" "}
          8 (4912) 505-777
        </a>
        <div className="navbar__link">
          <Link className="navbar__link1" to="/">
            {" "}
            <p>
              <FontAwesomeIcon icon={faStar} />
            </p>{" "}
            Избранное{" "}
          </Link>
          <Link className="navbar__link2" to="/">
            Вход
          </Link>
          <Link className="navbar__link3" to="/">
            Регистрация
          </Link>
        </div>
      </div>

      <div className="nav">
        <Link className="nav__h2" to="/">
          {" "}
          <p className="nav__link1_p">
            <FontAwesomeIcon icon={faUserGroup} />
          </p>{" "}
          Клуб <p className="nav__link1_p2">Хозмаркет</p>{" "}
        </Link>
        <h1 className="nav__h1">хоз</h1>
        <Link to="/">
          {" "}
          <img src="/img/logo.png" alt="" className="nav__img" />{" "}
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
