import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <div className="footer-fix">
    //   <footer className="footer">
    //     <img src="./logoxozm.png" alt="" width="150px" />
    //     <input type="text" className="footer__search" />
    //     <a href="tel:+998(91)44222317">+998(91)44222317</a>
    //     <p className="footer__subtitle">Интернет-магазин товаров для дома.</p>
    //   </footer>
    // </div>
    <footer className="footer footer-fix">
      <div className="footer-inner">
        <div className="footer-left">
          <a href="" className="footer__logo">
            <img src="" alt="" />
          </a>
          <div className="footer__search">
            <form action="">
              <input
                type="text"
                className="input__search"
                placeholder="Шуруповерт BOSCH"
              />
              <button type="submit" className="button__search icon icon-search">
                <i></i>
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
    </footer>
  );
};

export default Footer;
