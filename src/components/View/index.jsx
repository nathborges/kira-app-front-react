import React from "react";
import './styles.module.css';

export default props => {
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    );
};