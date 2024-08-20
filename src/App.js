import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import BlogPage from './components/BlogPage';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import SnackBarComponent from './components/SnackBarComponent';
import NotFound from './components/NotFound'; 


function App() {
  const { t } = useTranslation();

  useEffect(() => {
    const sectionsWithParallax = document.querySelectorAll('.parallax');
    function updateParallax() {
      const scrollPosition = window.scrollY;
      sectionsWithParallax.forEach(section => {
        const offsetTop = section.offsetTop;
        const distanceFromTop = offsetTop - scrollPosition;
        const parallaxAmount = distanceFromTop * 0.5;
        section.style.backgroundPositionY = parallaxAmount + 'px';
      });
    }
    window.addEventListener('scroll', updateParallax);

    let projectId = i18next.language === 'en' ? "65bf733665e7726cb37fb0d1" : "65ec6bd3175bb21b06b57dd9";

    (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: projectId },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
    })(document, 'script');
  }, [i18next.language]);  // Updated dependency

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><Header /><Main /><Contact /><Footer /><Modal /><SnackBarComponent /></Layout>} />
          <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
          <Route path="*" element={<NotFound />} />  {/* Optional 404 handling */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;