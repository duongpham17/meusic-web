import styles from './Developer.module.scss';
import React from 'react';

const Developer = () => {
  return (
    <div className={styles.container}>
        <a href="https://meusic-api-app.herokuapp.com" target="_blank" rel="noreferrer noopener">
          Api
        </a>
    </div>
  )
}

export default Developer