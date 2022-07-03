import React from "react";
import "./styles.module.css";
import View from "../View";

export default (props) => {
  return (
    <View>
      <div className="article">
        <div className="articleImageArea">
          <div className="articleDetails">
            <div className="articleTitleMini">{props.title}</div>
            <div className="articleDate">{props.date}</div>
          </div>
          <img className="articleImage" src={props.url} alt={props.alt} />
        </div>
        <h2 className="articleTitle">{props.title}</h2>
        <p className="articleText">{props.text}</p>
      </div>
    </View>
  );
  }
