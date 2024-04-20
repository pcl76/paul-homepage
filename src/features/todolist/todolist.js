import React from 'react';
import styles from "./todolist.module.css";
import Todoitem from '../todoitem/todoitem';


const Todolist = (props) => {
    return (
    <div className={styles.todolist}>
        
        {props.lijstje.map((item) => {
        return (
                <Todoitem
                    //key={props.lijstje.id}
                    item={item}
                    removeItem={props.removeGoal}
                    
                    //doneItem={props.doneGoal}
                />
            
            )}
    )}
    </div>
    )
}


export default Todolist;