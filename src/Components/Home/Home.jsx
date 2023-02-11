import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const keyVariant = {
  hidden: {
    opacity: 0,
    y: '100%',
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};
const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home__page global__container ">
      <div className="intro__wrapper">
        <motion.div
          className="home__intro"
          variants={keyVariant}
          animate="visible"
          initial="hidden">
          <h3>
            {t('titleone')} <span>Mohamed Chouati</span>{' '}
          </h3>
          <h3>
            {t('titletwo')} <span>MC_Expertise</span>{' '}
          </h3>
          <p>{t('parahome')}</p>
          <p>" {t('slogan')} "</p>
          <div className="intro_links">
            <ul className="ul">
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="arrow__link" />

                <Link to="/project">{t('linkone')}</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="arrow__link" />

                <Link to="/about">{t('linktwo')}</Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
