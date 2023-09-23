import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.active + ` ${style.link}` : style.link
            }
            to="/profile"
          >
            Profile
          </NavLink>
        </li>

        <li className={style.item}>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.active + ` ${style.link}` : style.link
            }
            to="/dialogs"
          >
            Messages
          </NavLink>
        </li>

        <li className={style.item}>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.active + ` ${style.link}` : style.link
            }
            to="/news"
          >
            News
          </NavLink>
        </li>

        <li className={style.item}>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.active + ` ${style.link}` : style.link
            }
            to="/music"
          >
            Music
          </NavLink>
        </li>

        <li className={style.item}>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.active + ` ${style.link}` : style.link
            }
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink 
          className={(navData) => navData.isActive ? `${style.link} ${style.active}` : style.link}
          to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
