import React from "react";
import View from "../View";
import Text from "../Text";
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default (props) => {
  return (
    <View>
      <div className={styles.header}>
        <div className={[styles.row, { gap: "10px" }]}>
        <FontAwesomeIcon className="header-menu" icon={faArrowLeft} />
          <Text>{props.children}</Text>
        </div>
        <FontAwesomeIcon className="header-menu" icon={faBars} />
      </div>
    </View>
  );
};

