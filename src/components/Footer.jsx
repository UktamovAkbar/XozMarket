import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";


const Footer = () => {
  return (
    <footer className="footer footer-fix">
      <div className="footer-inner">
        <div className="footer-left">
          <a href="" className="footer__logo">
            <img src="https://xozm.ru/local/templates/main/img/svg/logo.svg" alt="" />
          </a>
          <div className="footer__search">
            <form action="">
              <input
                type="text"
                className="input__search"
                placeholder="Шуруповерт BOSCH"
              />
              <button type="submit" className="button__search icon icon-search">
                <i class="fa-sharp fa-solid fa-file-signature"></i>
              </button>
            </form>
          </div>
          <div className="footer__logo_text">
            <nobr>Интернет-магазин</nobr>
            товаров для дома.
            <a href="#feedback" class="js-feedback-open">
              <i class="font-write"></i>
              Поделитесь мнением
            </a>
          </div>
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
      </div>
      <div className="foter">
        <footer class="foter">
          <div>
          © 2016-2023. Интернет-магазин ХозМаркет. Все права защищены.                
          </div>
        </footer>
      </div>
      
    </footer>
  );
};

export default Footer;
