import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Import de Link depuis react-router-dom

function Footer() {
    const { t } = useTranslation();
    
    return (
        <footer className="footer container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <h5>Services</h5>
                        <ul className="footer-services">
    <li>
        <a href="/#web">{t('web')}</a>
    </li>
    <li>
        <a href="/#software">{t('software')}</a>
    </li>
    <li>
        <a href="/#branding">{t('branding')}</a>
    </li>
    <li>
        <a href="/#social">{t('social')}</a>
    </li>
</ul>
                    </div>
                    <div className="col-md-6 col-lg-4 contact-us">
                        <h5>{t('contact_us')}</h5>
                        <p>Marcory Zone4, Abidjan, Côte d'Ivoire</p>
                        <p>Email: info@kodit.ai</p>
                        <p>Phone: 
                            <a href="https://wa.me/2250700999990">+225 0700999990</a></p>
                        </div>
                    <div className="col-md-6 col-lg-4 follow-us">
                        <h5>{t('follow_us')}</h5>
                        <ul className="footer-social-icons">
                            <li>
                                <a href="https://medium.com/@0xkodit">
                                <i className="fab fa-medium"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/Koditxai">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/0xkodit/">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/kodit.ai?igsh=MXF1a3pmbjl2OHQ5cw==">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                             <li>
                                 <a href="https://api.whatsapp.com/send?phone=2250700999990" target="_blank">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col">
                        <p className="text-center">
                            © 2024 KODIT. {t('all_rights')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;