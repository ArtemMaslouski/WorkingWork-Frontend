import React from 'react';
import './Loader.css';

const Loader = ({ error, isLoading, isEmpty }) => {
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
        <div>Заданий по данному запросу не найдено</div>
      </div>
    );
  }

  return null;
};

export default Loader;
