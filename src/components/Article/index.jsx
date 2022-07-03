import React from "react";
import "./styles.module.css";
import View from "../View";

export default (props) => {
  return (
    <View>
      <div className={styles.article}>
        <div className={styles.articleImageArea}>
          <div className={styles.articleDetails}>
            <div className={styles.articleTitleMini}>{props.title}</div>
            <div className={styles.articleDate}>{props.date}</div>
          </div>
          <img className={styles.articleImage} src={props.url} alt={props.alt} />
        </div>
        <h2 className={styles.articleTitle}>{props.title}</h2>
        <p className={styles.articleText}>{props.text}</p>
      </div>
    </View>
  );
};
