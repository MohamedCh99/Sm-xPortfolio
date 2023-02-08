import React from 'react';
import './Header.css';
import logo from '../../Asset/darklogo.png';
import menu from '../../Asset/menu.png';
import { useTranslation } from 'react-i18next';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="header__page global__container">
      <motion.div
        className="header__content"
        initial={{ opacity: 0, y: '-500%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="" className="header__logo" />
        </Link>

        <div className="rightheader__side">
          {/* langue */}
          {i18n.language === 'en' && (
            <button
              onClick={() => {
                i18n.changeLanguage('fr');
              }}>
              {t('fr')}
            </button>
          )}
          {i18n.language === 'fr' && (
            <button
              onClick={() => {
                i18n.changeLanguage('en');
              }}>
              {t('fr')}
            </button>
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
