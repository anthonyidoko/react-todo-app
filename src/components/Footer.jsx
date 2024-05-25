import React from 'react'
import styles from './footer.module.css'

const Footer = ({completed, total}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.text}>Total Items: {completed}</h1>
        <h1 className={styles.text1}>Completed Items: {total}</h1>
        </div>
  )
}

export default Footer