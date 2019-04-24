import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}
      onPress={props.onPress}
    >
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  }
})

export{ Button };