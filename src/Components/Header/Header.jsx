import React, { useState } from 'react';
import './Header.css';
import logo from '../../Asset/darklogo.png';
import menu from '../../Asset/menu.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
const Header = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(false);
  const handleactive = () => {
    setActive(true);
  };
  return (
    <div className="header__page global__container">
      <motion.div
        className="header__content"
        initial={{ opacity: 0, y: '-500%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        {/* logo */}
        <img src={logo} alt="" className="header__logo" />

        <div className="rightheader__side">
          {/* langue */}
          {i18n.language == 'en' && (
            <a
              href="#"
              onClick={() => {
                i18n.changeLanguage('fr');
              }}>
              FR
            </a>
          )}
          {i18n.language == 'fr' && (
            <a
              href="#"
              onClick={() => {
                i18n.changeLanguage('en');
              }}>
              EN
            </a>
          )}
          {/* menu */}
          <NavLink to="/work" className="header__menu">
            <img src={menu} alt="" className="header__menu" />
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
