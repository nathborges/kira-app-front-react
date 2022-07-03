import React from "react";
import './styles.module.css';

export default props => {
    return(
        <div className={styles.text}>
            {props.children}
        </div>
    )
}