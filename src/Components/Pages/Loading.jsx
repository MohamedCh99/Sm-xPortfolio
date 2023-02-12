import React from 'react';
import loadingg from '../../Asset/loading.gif';
import './Styles.css';
import { useTranslation } from 'react-i18next';
const Loading = () => {
  const { t } = useTranslation();
  return (
    <div className="loading__page">
      <img src={loadingg} alt="" className="logoloading" />
      <p className="loading__p">
        {t('loading')} <span>MC_EXPERTISE &copy; 2023</span>{' '}
      </p>
    </div>
  );
};

export default Loading;
