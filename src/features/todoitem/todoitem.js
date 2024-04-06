import React from 'react';
import styles from './todoitem.module.css'

const Todoitem = (props) => {

    return (
        <div className={styles.todoitem}>
            <div className={styles.wrapper}>
                <button className={styles.buttonRemove} onClick={props.removeItem} >Remove</button>
                <button className={styles.buttonDone} onClick={props.doneItem}>Done</button>
            </div>
 
            <p>{props.item}</p>
        </div>

    )

}

export default Todoitem;