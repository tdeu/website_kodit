import { changeLanguage } from 'i18next';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const dropdowns = document.querySelectorAll('.navigation .menu .se');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', function () {
                this.nextElementSibling.classList.toggle('show');
            });
        });
    }, []);

    const isOnBlogPage = location.pathname === '/blog';

    return (
        <nav className="navigation">
            <div className="container-fluid">
                <div className="logo">
                    <Link to="/">
                        <img src="icons/LOGO WHITE.png" alt="logo" />
                    </Link>
                </div>
                <div className="menu" id="menu">
                    <ul>
                        <li className="menu--exit">
                            <i className="fa fa-times"></i>
                        </li>
                        <li>
                            <span className="se">
                                {t('solutions')} <i className="fas fa-chevron-down"></i>
                            </span>
                            <ul className="sub-menu">
                                <li><a href="/#web">{t('web')}</a></li>
                                <li><a href="/#software">{t('software')}</a></li>
                                <li><a href="/#branding">{t('branding')}</a></li>
                                <li><a href="/#social">{t('social')}</a></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/blog" className={isOnBlogPage ? 'active' : ''}>{t('blog')}</Link>
                        </li>
                        <li>
                            <a href="/#contact-form" className="t">{t('contact_us')}</a>
                        </li>
                        <li type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <a href="/#about">{t('about_us')}</a>
                        </li>
                        <li>
                            <div className="li-lang" style={{ backgroundColor: 'black', borderRadius: '5px', padding: '5px 10px' }}>
                                <span className="sreal" style={{ color: 'white' }}>
                                    {i18next.language === "en" ? "EN" : "FR"}  
                                    <span className="sp-lang" style={{ color: "white", marginLeft: '5px' }}>
                                        <i className='fas fa-chevron-down'></i>
                                    </span>
                                </span>
                                <div className="lang">
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li>
                                            <button 
                                                onClick={() => {
                                                    localStorage.setItem('locales', "fr");
                                                    changeLanguage("fr");
                                                }}
                                                style={{ color: 'white', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                                            >
                                                FR
                                            </button>
                                        </li>
                                        <li>
                                            <button 
                                                onClick={() => {
                                                    localStorage.setItem('locales', "en");
                                                    changeLanguage("en");
                                                }}
                                                style={{ color: 'white', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                                            >
                                                EN
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="menu--enter" id="menu--enter">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </nav>
    );
}

export default Nav;