import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src="loader.gif" alt="Loading..." />
    </div>
  );
};

export default Loader;
