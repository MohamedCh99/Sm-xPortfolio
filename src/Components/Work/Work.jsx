import React from 'react';
import './Work.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
const keyVariant = {
  hidden: {
    opacity: 0,
    y: '-100%',
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};
const Work = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="work__pages">
      <div className="menu__items">
        <ul>
          <motion.li
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <Link to="/" className="work__links">
              {t('accueil')}
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <Link to="/project" className="work__links">
              {t('Projects')}
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>
            <Link to="/about" className="work__links">
              {t('apropos')}
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <Link to="/contact" className="work__links">
              {t('contact')}
            </Link>
          </motion.li>
        </ul>
        <motion.div
          className="work__social"
          variants={keyVariant}
          animate="visible"
          initial="hidden">
          <ul className="ul">
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="arrow__work" />{' '}
              <a
                href="https://www.instagram.com/mohamed.chouati_/"
                target="_blank">
                instagram
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="arrow__work" />{' '}
              <a href="https://www.linkedin.com/in/mch05" target="_blank">
                linkedin
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
