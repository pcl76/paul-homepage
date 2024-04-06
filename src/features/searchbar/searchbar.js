import React, {useState} from 'react';
import styles from "./searchbar.module.css";

const Searchbar = (props) => {

    const clickPress = (event) => {

        if ((event.key === "Enter")) {
            if(event.target.value.length>0){
            props.addGoal(event.target.value)
            event.target.value='';
            }
        }
    }

    return (
        <div className={styles.searchbar}>
            <h2>What's on your mind today</h2> 
            <input onKeyDown={clickPress} />
        </div>
    )
}

export default Searchbar;