import React from "react";
import View from "../View";
import styles from './styles.module.css';

export default props => {
    return (

                <ul className={styles.list}>
                    <li className={styles.selected}>Todas as categorias</li>
                    <li className={styles.item}>Ciclo menstrual</li>
                    <li className={styles.item}>Saúde e bem-estar</li>
                    <li className={styles.item}>Sororidade</li>
                    <li className={styles.item}>Produtos intimus</li>
                    <li className={styles.item}>Questionando estigmas</li>
                    <li className={styles.item}>Favoritos</li>
                </ul>
      
    );
}

