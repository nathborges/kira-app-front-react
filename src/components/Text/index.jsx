import React from "react";
import styles from './styles.module.css';
import View from '../View';

export default props => {
    return(
        <View className={styles.text}>
            {props.children}
        </View>
    );
};