import React from 'react';
import './About.css';
import me from '../../Asset/meblack.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      className="about__page"
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <div className="leftabout__side">
        <h1 className="title__pages">{t('apropostitle')}</h1>
        <p>{t('apropostext')}</p>
        <ul className="ul">
          <li>
            <FontAwesomeIcon icon={faArrowRight} className="arrow__about" />

            {i18n.language === 'en' && (
              <a
                href="https://drive.google.com/file/d/1mjXHSUdCmGq9gMjZK6Iu8j2P_jC7ml8n/view?usp=share_link"
                target="_blank"
                rel="noreferrer">
                {t('cv')}
              </a>
            )}
            {i18n.language === 'fr' && (
              <a
                href="https://drive.google.com/file/d/1gtHolEqUYlfcovtky4z59hBC0o8jtmrN/view"
                target="_blank"
                rel="noreferrer">
                {t('cv')}
              </a>
            )}
          </li>
        </ul>
      </div>
      <div className="rightabout__side">
        <div className="border__imgg">
          <img src={me} alt="" className="about__image" />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
