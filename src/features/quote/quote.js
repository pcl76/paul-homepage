import React from 'react';
import styles from "./quote.module.css";




const quote = (props) => {
    return (
        <div className={styles.quote}>
             <p>{`" ${props.randomQuote[0].content} "`}</p>
             <p>{props.randomQuote[0].author}</p>
        </div>

    )
}

export default quote;