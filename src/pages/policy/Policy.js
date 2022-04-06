import styles from './Policy.module.scss';
import React from 'react'

const Policy = () => {
  return (
    <div className={styles.container}>

        <div className={styles.box}>
            <h2>About site</h2>
            <p>
                This site is built using decentralised storage, where files / images are stored on the blockchain.
                <br/>
                The purpose of building this site was to see if decentralised storage has a future.
                <br/><br/>
                Decentralised storage is completely free and its most unqiue feature is if the content or data stored in a centralised database is deleted, 
                the file / image will exist forever as long as the blockchain keeps operating.
                <br/>
                This means as long you have the ipfs link, the data you require is always accessible.
            </p>
        </div>

        <div className={styles.box}>
            <h2>Disclaimer</h2>
            <p>
                This site is just an experiment a side project, this project will never generate revenue.
                <br/>
                This project is free to use and copy.
            </p>
        </div>

        <div className={styles.box}>
            <h2>Cookies</h2>
            <p>
                These cookies are used to keep you logged in when you close the browser, refresh the browser and revisiting the site. 
                <br/>
                This cookie will remember you and keep you logged in, this is for a better user experience and nothing else.
            </p>
        </div>
    </div>
  )
}

export default Policy