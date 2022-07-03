import React from "react";
import View from "../View";
import Text from "../Text";
import './styles.module.css';
import { FontAwesome5 } from "@expo/vector-icons";

export default (props) => {
  return (
    <View className={styles.header}>
      <View className={styles.row}>
        <View className={[styles.row, { gap: "10px" }]}>
          <FontAwesome5 name="arrow-left" size={18} color="#666666" />
          <Text>{props.children}</Text>
        </View>
        <SideMenu className={styles.menu} />
      </View>
    </View>
  );
};

