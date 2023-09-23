import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <header className={style.header}>
        <img
          src={logo}
          alt="logo"
        ></img>
        <span className={style.text}>FaceDog</span>
        <ul className={style.list}>
          <li className={style.item}>
            <a href="#1" className={style.link}>Псоны</a>
          </li>
          <li className={style.item}>
            <a href="#1" className={style.link}>Ближайшие гидранты</a>
          </li>
          <li className={style.item}>
            <a href="#1" className={style.link}>График корма</a>
          </li>
        </ul>
    </header>
  );
};

export default Header;
