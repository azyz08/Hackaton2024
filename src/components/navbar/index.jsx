import "./style.scss"
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useMode from "../../utils/zustand";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import '../../utils/i18n';
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useMode();

    const { t, i18n } = useTranslation();
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);
    const handleChange = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    };

    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();
    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);
    const handleClick = (path) => {
        setActiveLink(path);
    };


    return (
        <>
            <div className="nav navbar bg-[white] dark:bg-[black] text-[#32CD32]">
                <Link className="logo" to={"/"}><img src="https://media.tenor.com/c9hBqUmb588AAAAj/sustainability-environment.gif" alt="" /><p>EcoSwap</p></Link>
                <input type="checkbox" id="m" />
                <ul className="duration-200 bg-[white] dark:bg-[black] text-[#32CD32">
                    <div className="labelBox">
                        <label className="text-[black] dark:text-[white]" htmlFor="m"><i class="fa-solid fa-xmark"></i></label>
                        <select className="border-[1px] rounded-[5px] pt-[1px] pb-[1px] bg-white cursor-pointer border-[blue] text-[#121212] focus:outline-none text-[20px]" value={i18n.language} onChange={handleChange}>
                            <option value="uz">O'z</option>
                            <option value="ru">Рус</option>
                            <option value="en">Eng</option>
                        </select>
                    </div>
                    <Link
                        to="/"
                        onClick={() => handleClick('/')}
                        className={activeLink === '/' ? 'active' : 'link'}
                    ><p>{t("son")}</p>
                        <span className={`underline ${activeLink === '/' ? 'active' : ''}`}></span>
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => handleClick('/about')}
                        className={activeLink === '/about' ? 'active' : 'link'}
                    > <p>{t("log")}</p>
                        <span className={`underline ${activeLink === '/about' ? 'active' : ''}`}></span>
                    </Link>
                    <Link
                        to="/murojaat"
                        onClick={() => handleClick('/murojaat')}
                        className={activeLink === '/murojaat' ? 'active' : 'link'}
                    > <p>{t("bor")}</p>
                        <span className={`underline ${activeLink === '/murojaat' ? 'active' : ''}`}></span>
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => handleClick('/contact')}
                        className={activeLink === '/contact' ? 'active' : 'link'}
                    > <p>{t("pop")}</p>
                        <span className={`underline ${activeLink === '/contact' ? 'active' : ''}`}></span>
                    </Link>
                </ul>
                <div className="icons">
                    <DarkModeSwitch
                        className="text-[#FFA500] dark:text-white"
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        size={25} />
                    <select className="select1 border-[1px] rounded-[5px] pt-[2px] pb-[2px] bg-white cursor-pointer border-[blue] text-[#121212] focus:outline-none" value={i18n.language} onChange={handleChange}>
                        <option value="uz">O'z</option>
                        <option value="ru">Рус</option>
                        <option value="en">Eng</option>
                    </select>
                    <label className="text-[25px]" htmlFor="m"><i class="fa-solid fa-bars"></i></label>
                </div>
            </div>
        </>
    )
}