import React from "react";
import spinner from "../../../assets/spinner.svg";
import style from './preloader.module.css'

const Preloader = () => {
    return (
        <img className={style.spinner} src={spinner} alt="preloader-spinner" />
    )
}

export default Preloader