import React from 'react';
import './Loader.css';
import { useTranslation } from 'react-i18next';

const Loader = ({ error, isLoading, isEmpty }) => {
  const {t} = useTranslation();

  if (error) {
    return (
      <div className="no-tasks-animation">
        <span className="w-letter">W</span>
        <span className="w-letter">W</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="no-tasks-animation">
        <span className="w-letter">W</span>
        <span className="w-letter">W</span>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="no-tasks-animation">
        <div>{t('noTasks')}</div>
      </div>
    );
  }

  return null;
};

export default Loader;
