import React from "react";
import View from "../View";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from './styles.module.css';

export default (props) => { 
    return(
        <div className={styles.searchArea}>
            <input placeholder="buscar" className={styles.search}/>
            <button placeholder={faSearch} className={styles.searchButton} type="submit">
            </button>
        </div>
    )
}
