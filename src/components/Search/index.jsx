import React from "react";
import View from "../View";
import './styles.module.css';
import { FontAwesome5 } from '@expo/vector-icons';

export default (props) => { 
    return(
        <View className={styles.searchArea}>
            <input placeholder="buscar" className={styles.search}/>
            <button className={styles.searchButton} type="submit">
                <FontAwesome5 name="search" size={18} color="#666666" />
            </button>
        </View>
    )
}
