import React, { useEffect, useRef } from "react";
import Baffle from "baffle";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Header() {
  const textRef = useRef();

  const { t } = useTranslation();

  useEffect(() => {
    
  
    textRef.current.innerText = t('anticipate');
    const b = Baffle(textRef.current);
    // Configure Baffle with options if needed
    b.set({
      characters: "░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒",
      speed: 120,
    });
    b.start();
    b.reveal(4000);
    // You can configure Baffle further or customize animations as needed
    // Cleanup function to stop Baffle when the component unmounts
    return () => {
      b.stop();
    };
  }, [i18next.language]);

 
 

  return (
    <>
      <div className="header parallax">
        <img
          src="images/background.jpg"
          className="header__video"
          alt="background-gif"
        />
        <div className="header--overlay">
          <div className="container">
            <div className="header-text">
              <div className="header-text__text wow fadeInLeft">
                <h1 className="data" ref={textRef}>
                  {t('anticipate')}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header--bottom parallax">
        <div className="container">
          <div className="d-flex align-items-center">
            <div>
              <div className="img-container">
                <img src="videos/com-speed-unscreen.gif" alt="" />
              </div>
            </div>

            <div>
              <p>
               {t('header_description')}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;