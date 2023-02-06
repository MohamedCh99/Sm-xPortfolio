import React, { useEffect, useState } from 'react';
import './Styles.css';
import vdsbud from '../../Asset/PhotospROJECTS (2).mp4';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const ItBudnet = () => {
  const { t, i18n } = useTranslation();
  const [clicked1, setClicked1] = useState(false);
  const [hover, setHover] = useState(true);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 1180) {
        setCounter(2);
      }
    };

    window.addEventListener('click', handleWindowResize);

    return () => {
      window.removeEventListener('click', handleWindowResize);
    };
  }, [counter]);

  const close = () => {
    setClicked1(false);
    setHover(true);
  };
  const counterClick = () => {
    setCounter(counter + 1);
    if (counter === 2) {
      close();
      setCounter(counter - 1);
    }
    console.log(counter);
  };
  const handleclicked = () => {
    setClicked1(true);
    setHover(false);
    counterClick();
  };
  const handleclickedd = () => {
    setHover(false);
    counterClick();
  };

  return (
    <div className="smeex__page">
      <div className="video__landing">
        <video
          src={vdsbud}
          loop
          autoPlay
          muted
          className={
            clicked1 ? 'smeexyt__video1 smeexyt__active' : 'smeexyt__video1'
          }
          onClick={handleclicked}></video>

        <style>
          {`.smeexyt__video1:hover {
          transform: ${hover ? 'scale(1.02)' : ''};
        }`}
        </style>
        <style>
          {`.smeexyt__video2:hover {
          transform: ${hover ? 'scale(1.02)' : ''};
        }`}
        </style>
      </div>

      <div className="content__smeex">
        <h1 className="title__pages title__smeex">ItBudNet</h1>
        <div className="smeex__text">
          <p>
            {t('descriptionbud1')} <span>ItBudNet</span>,{t('descriptionbud2')}.{' '}
            <a
              target="_blank"
              href="https://github.com/MohamedCh99/ItBudNey-App">
              {t('liencode')}
            </a>
            .
          </p>
          <h2>{t('h1bud')} :</h2>
        </div>
        <div className="contentsmeexyt">
          <div className="smeex__idee">
            <ul>
              <ol> - {t('et1bud')}</ol>
              <ol> - {t('et2bud')}</ol>
              <ol> - {t('et3bud')}</ol>
            </ul>
          </div>
          <div className="smeex__script">
            <ul>
              <ol> - {t('et4bud')}</ol>
              <ol>
                - {t('Grâce')} <span>ItBudNet</span> {t('et5bud')}
              </ol>
              <ol>- {t('et6bud')}</ol>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItBudnet;
