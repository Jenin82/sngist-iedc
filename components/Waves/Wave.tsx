import React from 'react'
import styles from './Wave.module.css';

const Wave = () => {
  return (
    <div className={styles.waves}>
      <div className={styles.ocean}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
    </div>
  );
}

export default Wave