import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({...props}) => {
  if (props.right) {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          backgroundColor: '#36BDE2',
          justifyContent: 'center',
          alignSelf: 'flex-end',
          alignItems: 'center',
          borderRadius: 15,
          paddingVertical: 10,
          width: 150,
          marginTop: 25,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          Lanjut
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#36BDE2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 10,
        width: 150,
        marginTop: 25,
      }}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
