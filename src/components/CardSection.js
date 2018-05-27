import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style = {styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#e5c3c6',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default CardSection
