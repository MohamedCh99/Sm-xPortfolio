import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import smeex from '../../Asset/1.png';
import spotify from '../../Asset/2.png';
import netmovie from '../../Asset/3.png';
import bar from '../../Asset/4.png';
import fit from '../../Asset/5.png';
import prod from '../../Asset/6.png';
import bud from '../../Asset/7.png';
import ld from '../../Asset/8.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
const keyVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};
const Projects = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <div className="overProjects">
      <div className="projects__page">
        <div className="leftProjects__side">
          <motion.h1
            className="title__pages"
            initial={{ opacity: 0, y: '-100px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}>
            {t('projecttitle')}
          </motion.h1>
          <div className="projects">
            <ul>
              <motion.li
                initial={{ opacity: 0, y: '-100px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                onMouseEnter={() => setSelectedIndex(0)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/smeexyt"> Smééx YT</a>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: '-100px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                onMouseEnter={() => setSelectedIndex(7)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/landingpage"> Moha - Code</a>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: '-100px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95 }}
                onMouseEnter={() => setSelectedIndex(6)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/itbudnet"> ItBudNey</a>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: '-100px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                onMouseEnter={() => setSelectedIndex(1)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/spotifyclone"> Clone Spotify</a>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: '-100px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85 }}
                onMouseEnter={() => setSelectedIndex(2)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/netmovie"> Net Movie</a>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: '-100px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                onMouseEnter={() => setSelectedIndex(3)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/searchbar"> {t('barR')}</a>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: '-100px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                onMouseEnter={() => setSelectedIndex(4)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/fitclub"> The Fit Club</a>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: '-100px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                onMouseEnter={() => setSelectedIndex(5)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/product"> {t('proec')}</a>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>
        <div className="rightProjects__side">
          <div className="border__img">
            {selectedIndex === 0 && (
              <motion.img
                src={smeex}
                alt=""
                className="fit__img"
                variants={keyVariant}
                animate="visible"
                initial="hidden"
              />
            )}

            {selectedIndex === 1 && (
              <motion.img
                src={spotify}
                alt=""
                className="fit__img"
                variants={keyVariant}
                animate="visible"
                initial="hidden"
              />
            )}
            {selectedIndex === 2 && (
              <motion.img
                src={netmovie}
                alt=""
                className="fit__img"
                variants={keyVariant}
                animate="visible"
                initial="hidden"
              />
            )}
            {selectedIndex === 3 && (
              <motion.img
                src={bar}
                alt=""
                className="fit__img"
                variants={keyVariant}
                animate="visible"
                initial="hidden"
              />
            )}
            {selectedIndex === 4 && (
              <motion.img
                src={fit}
                alt=""
                className="fit__img"
                variants={keyVariant}
                animate="visible"
                initial="hidden"
              />
            )}
            {selectedIndex === 5 && (
              <motion.img
                src={prod}
                alt=""
                className="fit__img"
                variants={keyVariant}
                animate="visible"
                initial="hidden"
              />
            )}
            {selectedIndex === 6 && (
              <motion.img
                src={bud}
                alt=""
                className="fit__img"
                variants={keyVariant}
                animate="visible"
                initial="hidden"
              />
            )}
            {selectedIndex === 7 && (
              <motion.img
                src={ld}
                alt=""
                className="fit__img"
                variants={keyVariant}
                animate="visible"
                initial="hidden"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
