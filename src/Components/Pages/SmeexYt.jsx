import React, { useEffect, useState } from 'react';
import './Styles.css';
import vdsmeex from '../../Asset/prasmeexyt.mp4';
import vdpre from '../../Asset/PhotospROJECTS (1).mp4';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const SmeexYt = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [hover, setHover] = useState(true);
  const [counter, setCounter] = useState(1);
  const { t, i18n } = useTranslation();

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
    setClicked2(false);
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
    setClicked2(true);
    setHover(false);
    counterClick();
  };

  return (
    <div className="smeex__page">
      <div className="video__landing">
        <video
          src={vdsmeex}
          loop
          autoPlay
          muted
          className={
            clicked1 ? 'smeexyt__video1 smeexyt__active' : 'smeexyt__video1'
          }
          onClick={handleclicked}></video>
        <video
          src={vdpre}
          loop
          autoPlay
          muted
          className={
            clicked2 ? 'smeexyt__video2 smeexyt__active' : 'smeexyt__video2'
          }
          onClick={handleclickedd}></video>

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
        <h1 className="title__pages title__smeex">Smééx Yt</h1>
        <div className="smeex__text">
          <p>
            {t('Découvrez')} <span>Smeex-Yt</span>, {t('descriptionsmeexyt1')}{' '}
            <span>{t('descriptionsmeexyt2')}.</span>
          </p>
          <h2>{t('h1smeex')} :</h2>
        </div>
        <div className="contentsmeexyt">
          <div className="smeex__idee">
            <ul>
              <ol> - {t('et1')}</ol>
              <ol> - {t('et2')}</ol>
              <ol>
                {' '}
                - {t('et31')} <span>" {t('bt1')} "</span> {t('et32')}
              </ol>
              <ol> - {t('et4')}</ol>
            </ul>
          </div>
          <div className="smeex__script">
            <ul>
              <ol> - {t('et5')}</ol>
              <ol>- {t('et6')}</ol>
              <ol>
                {' '}
                - {t('et71')}
                <span>" {t('bt2')} "</span> {t('et71')}
              </ol>
              <ol>
                - {t('et8')} <span>{t('et82')}!</span>
              </ol>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmeexYt;
