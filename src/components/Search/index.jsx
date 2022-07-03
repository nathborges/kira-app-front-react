import React from "react";
import View from "../View";
import './styles.module.css';


export default (props) => { 
    return(
        <View className={styles.searchArea}>
            <input placeholder="buscar" className={styles.search}/>
            <button className={styles.searchButton} type="submit">
            search
            </button>
        </View>
    )
}
