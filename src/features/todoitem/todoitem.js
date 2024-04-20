import React, {useState} from 'react';
import styles from './todoitem.module.css'

const Todoitem = (props) => {
    const [isActive, setIsActive] = useState(true);

    const clickEvent = () => {
        props.removeItem(props.item.id)
    }

    const handleClick = () => {
        
        setIsActive(current => !current);
    }

    return (
        <div className={styles.todoitem} style={{backgroundColor: isActive ? 'antiquewhite' : 'rgb(150, 150, 150)'}} >
            <div className={styles.wrapper}>
                <button className={styles.buttonRemove} onClick={clickEvent} >Remove</button>
                <button className={styles.buttonDone} onClick={handleClick}>Done</button>
            </div>
 
            <p>{props.item.doel} </p>
        </div>

    )

}

export default Todoitem;