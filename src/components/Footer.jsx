import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__padding">
        <div className="footer-left">
          <Link to="*" className="footer__logo">
            <img
              src="https://xozm.ru/local/templates/main/img/svg/logo.svg"
              alt=""
            />
          </Link>
          <div className="footer__input">
            <input
              type="text"
              className="input__search"
              placeholder="Шуруповерт BOSCH"
            />
            <button className="footer__input_search">
              <i>icon</i>
            </button>
          </div>
          <div className="footer__logo_text">
            <p>Интернет-магазин товаров для дома</p>
          </div>
          <div className="footer__icon">
            <i></i>
          </div>
          <a href="*" className="footer__a">
            <i className=""></i>
          </a>
          <div class="footer_menu_links">
            <ul class="footer_menu_links__ul">
              <li class="footer_menu_links__li">
                <a>О компании</a>
              </li>

              <li class="footer_menu_links__li">
                <a>Акции и распродажи</a>
              </li>

              <li class="footer_menu_links__li">
                <a>Новости</a>
              </li>

              <li class="footer_menu_links__li">
                <a>Контакты</a>
              </li>

              <li class="footer_menu_links__li">
                <a>Партнеры</a>
              </li>
            </ul>
            <ul class="footer_menu_links__ul">
              {" "}
              <li class="footer_menu_links__li">
                <a>Договор оферты</a>
              </li>
              <li class="footer_menu_links__li">
                <a>Политика персональных данных</a>
              </li>
              <li class="footer_menu_links__li">
                <a>Доставка и Оплата</a>
              </li>
              <li class="footer_menu_links__li">
                <a>Кредит</a>
              </li>
              <li class="footer_menu_links__li">
                <a>Карта сайта</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="">
            <a href="tel:+998914422317" className="footer__number">
              +998(91)442-23-17
            </a>
          </div>
          <div className="footer__addres">
            <a href="*">Bukhara Monday_Labs</a>
          </div>
          <div className="footer__social_icons">
            <Link to="https://vk.com/">
              <img src="" alt="" />
            </Link>
            <Link to="https://twitter.com/">
              <img src="" alt="" />
            </Link>
            <Link to="https://www.facebook.com/">
              <img src="" alt="" />
            </Link>
            <Link to="https://www.instagram.com/">
              <img src="" alt="" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
