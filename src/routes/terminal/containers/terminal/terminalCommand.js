import React from 'react'
import styles from './style.css'

const TerminalCommand = props => (
  <div>
    <span className={styles.prompt}>&gt;</span>
    <span>{props.message}</span>
  </div>
)

export default TerminalCommand
