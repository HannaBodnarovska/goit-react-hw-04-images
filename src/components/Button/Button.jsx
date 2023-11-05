import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} className={styles.button} disabled={disabled}>
      Load more
    </button>
  );
};

export default Button;
