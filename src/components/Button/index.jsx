import React from 'react';
import './styles.module.css';
import View from '../View';

export default props => {
  return (
      <View className={styles.button}>
        <Text>{props.children}</Text>
      </View>
  );
}

